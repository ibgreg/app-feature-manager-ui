import { User } from "./user";

export interface FeatureToggler {
    id?: number;
    displayName?: string;
    technicalName?: string;
    expiresOn?: string;
    description?: string;
    inverted?: boolean;
    usersGranted?: User[];
}
