import { SoftwareNameplateVisualizations } from 'user-plugins/submodels/SoftwareNameplate/SoftwareNameplateVisualizations';
import { SubmodelVisualizationProps } from 'app/[locale]/viewer/_components/submodel/SubmodelVisualizationProps';
import { ExpandableDefaultSubmodelDisplay } from 'components/basics/ExpandableNestedContentWrapper';

export function SoftwareNameplateDetail({ submodel }: SubmodelVisualizationProps) {
    return (
        <>
            <SoftwareNameplateVisualizations submodel={submodel} />
            <ExpandableDefaultSubmodelDisplay submodel={submodel} />
        </>
    );
}
