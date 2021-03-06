import { AppConfig } from '../app_start/app.config';

/**
 * This serves as the global constants for the App
 */
export class AppConstants {

    public static get Sample(): string {
        return "Sample";
    }

    public static get SomeUrl(): string {
        return AppConfig.rootApiEndpoint + 'controller/action';
    }
}