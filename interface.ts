interface Databased{
        host: string;
        port: number;
        userName: string;
        password: number;

}

interface AppConfig{
    appName: string;
    version: string;
    debug: boolean;
    port: DoubleRange;
    databased: Databased;
    feature: {
        registration:boolean;
        darkMoode:boolean;

    }

}