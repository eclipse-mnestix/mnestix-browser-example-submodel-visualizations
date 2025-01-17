# mnestix-browser-example-submodel-visualizations
An example submodel visualization to guide the user in the creation of their own custom visualization.
We recommend to use this repository as a template and replace the body of the React component.

In order to show this visualization correctly, you have to add the following line into the mapping at `src/app/[locale]/viewer/_components/submodel/SubmodelCustomVisualizationMap.ts`:
```
    ['https://admin-shell.io/idta/SoftwareNameplate/1/0']: SoftwareNameplateDetail,
```
and merge the internalization files in the `locale` folder into mnestix' `src/user-profiles/locale` directory.
A full guide for custom submodel visualizations can be found [in the wiki](https://github.com/eclipse-mnestix/mnestix-browser/wiki/How-to-create-custom-submodel-visualizations).

This example visualization can be viewed with the mnestix AAS `https://vws.xitaso.com/aas/mnestix`, which is uploaded as a default AAS.
