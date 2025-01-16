import { SubmodelVisualizationProps } from 'app/[locale]/viewer/_components/submodel/SubmodelVisualizationProps';
import { useLocale, useTranslations } from 'next-intl';
import { findValueByIdShort } from 'lib/util/SubmodelResolverUtil';
import Link from 'next/link';

export function SoftwareNameplateVisualizations({ submodel }: SubmodelVisualizationProps) {
    const t = useTranslations('user-plugins.submodels.SoftwareNameplate');
    const locale = useLocale();

    const link = findValueByIdShort(submodel.submodelElements, 'URIOfTheProduct', locale) ?? '';
    const manufacturer = findValueByIdShort(submodel.submodelElements, 'ManufacturerName', locale) ?? '';

    // const fullDescriptionElement = elements.find(el => el.idShort == 'ManufacturerProductDescription');
    // const fullDescriptionDescription = getTranslationText(fullDescriptionElement as LangStringNameType[], intl)

    return (
        <>
            <h1>
                Welcome to Mnestix by <Link href={link}>{manufacturer}</Link>
            </h1>
            <h3>Asset Administration Shell made easy!</h3>
            <img src="https://www.hubspot.com/hs-fs/hubfs/linkedin-summary-examples-4.jpg?width=595&height=400&name=linkedin-summary-examples-4.jpg" />
        </>
    );
    return <p>{`${t('title')}: ${submodel.idShort}`}</p>;
}
