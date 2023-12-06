/**
 * Copyright (c) 2020 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

import { User as GitpodUser } from "@gitpod/gitpod-protocol";
import { AuthFlow } from "../../auth/auth-provider";
import { SubjectId } from "../../auth/subject-id";

// use declaration merging (https://www.typescriptlang.org/docs/handbook/declaration-merging.html) to augment the standard passport/express definitions
declare global {
    namespace Express {
        export interface User extends GitpodUser {}

        interface Request {
            authFlow?: AuthFlow;

            /**
             * The subject id that authorizes this request.
             * It also implies that this request requires FGA-based authorization!
             */
            subjectId?: SubjectId;
        }
    }
}
