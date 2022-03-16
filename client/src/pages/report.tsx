import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getForm, getReports } from "../api";
import * as XLSX from "xlsx";
import dayjs from "dayjs";
import { IPart } from "../components/FormGenerator/types";
import { Button } from "../components/Button";
import { Typography } from "../components/typography/Typography";

export const Report = () => {
  const { id } = useParams();
  const [data, setData] = useState<any[]>([]);
  const [form, setForm] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      getForm(id).then((res) => {
        if (res.data) {
          setForm(res.data);
          getReports(id).then((res) => {
            if (res.data) {
              setData(res.data);
            }
            setLoading(false);
          });
        }
      });
    }
  }, [id]);

  function generateXlsx() {
    var wb = XLSX.utils.book_new();

    wb.Props = {
      Title: "SheetJS Tutorial",
      Subject: "Test",
      Author: "Red Stapler",
      CreatedDate: new Date(2017, 12, 19),
    };

    wb.SheetNames.push("Test Sheet");

    let headerObject: { [x: string]: any } = {
      createdBy: "נוצר ע״י",
      createdAt: "נוצר ב",
    };
    form.schema.forEach((field: IPart) => {
      headerObject[field.name] = field.label;
    });

    const body = data.map((row) => {
      return {
        ...row.answers,
        createdBy: row.createdBy,
        createdAt: row.createdAt,
      };
    });

    var ws = XLSX.utils.json_to_sheet([headerObject, ...body]);

    wb.Sheets["Test Sheet"] = ws;

    XLSX.writeFile(
      wb,
      `${form.title}-${dayjs().format("YYYY-MM-DD_HH-mm")}.xlsx`
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {isLoading ? (
        <div>טוען...</div>
      ) : (
        <>
          <div style={{ display: "flex", gap: "8px" }}>
            <Typography variant="headline-bold">דיווחים עבור:</Typography>
            <Typography variant="headline-bold" highlight>
              {form.title}
            </Typography>
          </div>
          <Button theme="dark" onClick={generateXlsx}>
            הורדת אקסל
          </Button>
        </>
      )}
    </div>
  );
};
