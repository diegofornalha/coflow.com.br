import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { BackgroundImage } from '../../atoms';
import { DisplayModeContext } from '../../../context/displayMode';
import { getMatchingColor } from '../../../utils/themeColorMapper';

type SectionProps = React.PropsWithChildren<{
    type?: string;
    elementId?: string;
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e';
    backgroundSize?: 'full' | 'inset';
    backgroundImage?: any;
    styles?: any;
    'data-sb-field-path'?: string;
}>;

export default function Section(props: SectionProps) {
    const { backgroundSize = 'full', ...rest } = props;
    if (backgroundSize === 'inset') {
        return <SectionInset {...rest} />;
    } else {
        return <SectionFullWidth {...rest} />;
    }
}

function SectionInset(props: SectionProps) {
    const { type, elementId, colors = 'colors-d', backgroundImage, styles = {}, children, 'data-sb-field-path': fieldPath } = props;
    const classSuffix = type && type.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    const { displayMode } = React.useContext(DisplayModeContext);

    return (
        <div
            id={elementId || null}
            className={classNames(
                'sb-component',
                'sb-component-section',
                classSuffix && `sb-component-${classSuffix}`,
                'flex',
                mapStyles({ justifyContent: styles.justifyContent ?? 'center' }),
                styles.margin
            )}
            data-sb-field-path={fieldPath}
        >
            <div
                className={classNames(
                    [getMatchingColor(displayMode, colors)],
                    'flex',
                    'flex-col',
                    'justify-center',
                    'relative',
                    'w-full',
                    mapStyles({ width: styles.width ?? 'wide' }),
                    mapStyles({ height: styles.height ?? 'auto' }),
                    styles.padding ?? 'py-12 px-4',
                    styles.borderColor,
                    styles.borderStyle ? mapStyles({ borderStyle: styles.borderStyle }) : null,
                    styles.borderRadius ? mapStyles({ borderRadius: styles.borderRadius }) : null,
                    styles.boxShadow ? mapStyles({ boxShadow: styles.boxShadow }) : null
                )}
                style={{
                    borderWidth: styles.borderWidth ? `${styles.borderWidth}px` : null
                }}
            >
                {backgroundImage && <BackgroundImage {...backgroundImage} />}
                <div className="relative w-full">{children}</div>
            </div>
        </div>
    );
}

function SectionFullWidth(props: SectionProps) {
    const { type, elementId, colors = 'colors-d', backgroundImage, styles = {}, children, 'data-sb-field-path': fieldPath } = props;
    const classSuffix = type && type.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    const { displayMode } = React.useContext(DisplayModeContext);

    return (
        <div
            id={elementId || null}
            className={classNames(
                'sb-component',
                'sb-component-section',
                classSuffix && `sb-component-${classSuffix}`,
                getMatchingColor(displayMode, colors),
                'flex',
                'flex-col',
                'justify-center',
                'relative',
                mapStyles({ height: styles.height ?? 'auto' }),
                styles.margin,
                styles.padding ?? 'py-12 px-4',
                styles.borderColor,
                styles.borderStyle ? mapStyles({ borderStyle: styles.borderStyle }) : null,
                styles.borderRadius ? mapStyles({ borderRadius: styles.borderRadius }) : null,
                styles.boxShadow ? mapStyles({ boxShadow: styles.boxShadow }) : null
            )}
            style={{
                borderWidth: styles.borderWidth ? `${styles.borderWidth}px` : null
            }}
            data-sb-field-path={fieldPath}
        >
            {backgroundImage && <BackgroundImage {...backgroundImage} />}
            <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: styles.justifyContent ?? 'center' }))}>
                <div className={classNames('relative', 'w-full', mapStyles({ width: styles.width ?? 'wide' }))}>{children}</div>
            </div>
        </div>
    );
}
