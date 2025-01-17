import { SubmodelVisualizationProps } from 'app/[locale]/viewer/_components/submodel/SubmodelVisualizationProps';
import { useLocale, useTranslations } from 'next-intl';
import { findValueByIdShort } from 'lib/util/SubmodelResolverUtil';
import Link from 'next/link';

export function SoftwareNameplateVisualizations({ submodel }: SubmodelVisualizationProps) {
    const t = useTranslations('user-plugins.submodels.SoftwareNameplate');
    const locale = useLocale();

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
            <img src="https://xitaso.com/wp-content/uploads/mnestix_screens24.webp" />
            <h6>{t('versionInfo', { version: version, releaseDate: releaseDate })}</h6>
        </>
    );
}
