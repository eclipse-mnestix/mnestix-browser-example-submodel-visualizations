import { SubmodelVisualizationProps } from 'app/[locale]/viewer/_components/submodel/SubmodelVisualizationProps';
import { useLocale, useTranslations } from 'next-intl';
import { findValueByIdShort } from 'lib/util/SubmodelResolverUtil';
import Link from 'next/link';
import { Fragment } from 'react';

export function SoftwareNameplateVisualizations({ submodel }: SubmodelVisualizationProps) {
    const t = useTranslations('user-plugins.submodels.SoftwareNameplate');
    const locale = useLocale();
    // const valueByIdShort = submodelValueMapper(submodel, locale);
    //
    // const link = valueByIdShort('URIOfTheProduct');

    const link = findValueByIdShort(submodel.submodelElements, 'URIOfTheProduct', locale) ?? '';
    const manufacturer = findValueByIdShort(submodel.submodelElements, 'ManufacturerName', locale) ?? '';
    const description = findValueByIdShort(submodel.submodelElements, 'ManufacturerProductDescription', locale) ?? '';
    const version = findValueByIdShort(submodel.submodelElements, 'Version', locale) ?? '';
    const releaseDate = findValueByIdShort(submodel.submodelElements, 'ReleaseDate', locale) ?? '';

    return (
        <>
            <h1>
                {t('welcome')} <Link href={link}>{manufacturer}</Link>
            </h1>
            <h3>{t('slogan')}</h3>
            <p>{description}</p>
            <img src="https://www.hubspot.com/hs-fs/hubfs/linkedin-summary-examples-4.jpg?width=595&height=400&name=linkedin-summary-examples-4.jpg" />
            <h6>{t('versionInfo', { version: version, releaseDate: releaseDate })}</h6>
        </>
    );
}
