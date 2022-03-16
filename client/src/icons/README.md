# SVG requirements

- Every path must have the `vector-effect="non-scaling-stroke"` property, because the outline width should be constant and independent of the icon size.
- The use of specific colors should be avoid and instead `currentColor` should be used to align the icon color with the current font color.

In order to prepare the SVG files after export, you can use the following search and replace patterns:

- Search for `<path ` and replace with `<path vector-effect="non-scaling-stroke" `
- Search for `<circle ` and replace with `<circle vector-effect="non-scaling-stroke" `
- Search for `<ellipse ` and replace with `<ellipse vector-effect="non-scaling-stroke" `
- Search for `<rect ` and replace with `<rect vector-effect="non-scaling-stroke" `
- Search for `#2E2B26` and replace with `currentColor`

And then there are some icons that do not define a color at all at the moment (e.g. logo.svg). Those need to be fixed manually.
I will do this in a follow up commit to highlight it in the git history.
