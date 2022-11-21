import Realm from "realm";

import { concluidosSchema } from "./schemas/concluidosSchemas";

export const getRealm = async () =>
    await Realm.open({
        path: "alfbt-child",
        schema: [concluidosSchema],
        schemaVersion: 2,
    });