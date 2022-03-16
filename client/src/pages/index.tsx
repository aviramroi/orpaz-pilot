import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getForm } from "../api";
import { FormGenerator, IFormProps } from "../components/FormGenerator";

export const App = () => {
  const [formData, setFormData] = useState<IFormProps | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getForm(id).then((res) => {
        if (res.data) {
          setFormData(res.data);
        }
        setLoading(false);
      });
    }
  }, [id]);

  return <div>{!formData ? "loading" : <FormGenerator {...formData} />}</div>;
};
