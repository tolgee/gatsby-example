import * as React from 'react';
import {TolgeeProvider} from '@tolgee/react';
import * as translationsEn from '../../i18n/en.json';
import * as translationsCs from '../../i18n/cs.json';
import {HelloWorld} from "../../component/helloWorld";

const IndexPage = () => {
    return (
        <main>
            <div>
                <a href={'/'}>EN</a>
            </div>
            <TolgeeProvider
                forceLanguage="cs"
                apiKey={process.env.GATSBY_TOLGEE_API_KEY}
                apiUrl={process.env.GATSBY_TOLGEE_API_URL}
                staticData={{
                    en: translationsEn,
                    cs: translationsCs,
                }}
            >
                <HelloWorld />
            </TolgeeProvider>
        </main>
    );
};

export default IndexPage;
