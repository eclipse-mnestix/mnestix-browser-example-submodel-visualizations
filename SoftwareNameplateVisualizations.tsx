import { SubmodelVisualizationProps } from 'app/[locale]/viewer/_components/submodel/SubmodelVisualizationProps';
import { useLocale, useTranslations } from 'next-intl';
import { findValueByIdShort } from 'lib/util/SubmodelResolverUtil';
import Link from 'next/link';
import { Typography } from '@mui/material';

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
            <Typography variant="h1" color="primary">
                {t('welcome')} <Link href={link}>{manufacturer}</Link>
            </Typography>
            <Typography variant="h3">{t('slogan')}</Typography>
            <Typography sx={{ my: 2 }}>{description}</Typography>
            <img
                src="https://xitaso.com/wp-content/uploads/mnestix_screens24.webp"
                width="600px"
                style={{ margin: '10px' }}
            />
            <Typography variant="h6">{t('versionInfo', { version: version, releaseDate: releaseDate })}</Typography>
        </>
    );
}
