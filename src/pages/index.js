import * as React from 'react';
import {TolgeeProvider} from '@tolgee/react';
import {UI} from '@tolgee/ui';
import * as translationsEn from '../i18n/en.json';
import {HomePageInner} from "../component/homePageInner";

const IndexPage = () => {
    return (
        <main>
            <div>
                {/*This is a link to Czech version of the website.*/}
                <a href={'/cs'}>CS</a>
            </div>
            <TolgeeProvider
                forceLanguage="en"
                ui={UI}
                apiKey={process.env.GATSBY_TOLGEE_API_KEY}
                apiUrl={process.env.GATSBY_TOLGEE_API_URL}
                staticData={{
                    en: translationsEn
                }}
            >
                <HomePageInner/>
            </TolgeeProvider>
        </main>
    );
};

export default IndexPage;
