import { card } from "./card";
import { entityBase } from "./entityBase";
import { transaction } from "./transaction";
import { base } from "../base";
import { payIn } from "./payIn";

export namespace cardValidation {
    interface CardValidationData extends entityBase.EntityBaseData {
        /**
         * The unique identifier of the user at the source of the transaction.
         */
        AuthorId: string;

        /**
         * The status of the transaction.
         */
        Status: transaction.TransactionStatus;

        /**
         * The URL to which users are automatically returned after 3DS2 if it is triggered (i.e., if the SecureModeNeeded parameter is set to true).
         */
        SecureModeReturnURL: string;

        /**
         * The URL to which users are to be redirected to proceed to 3DS2 validation.
         */
        SecureModeRedirectURL: string;

        /**
         * Whether or not the SecureMode was used.
         */
        SecureModeNeeded: boolean;

        /**
         * The IP address of the end user initiating the transaction, in IPV4 or IPV6 format.
         */
        IpAddress: string;

        /**
         * Information about the browser used by the end user (author) to perform the payment.
         */
        BrowserInfo: base.BrowserInfoData;

        /**
         * Whether the card is valid or not.
         */
        Validity: card.CardValidity;

        /**
         * The type of transaction. In the specific case of the Card Validation object, this value indicates a transaction made to perform a strong customer authentication without debiting the card.
         */
        Type: transaction.TransactionType;

        /**
         * The 3DS protocol version applied to the transaction.
         */
        Applied3DSVersion: payIn._3DSVersion;

        /**
         * The code indicating the result of the operation. This information is mostly used to handle errors or for filtering purposes.
         */
        ResultCode: string;

        /**
         * The explanation of the result code.
         */
        ResultMessage: string;
    }

    interface CreateCardValidation {
        /**
         * The unique identifier of the user at the source of the transaction.
         */
        AuthorId: string;

        /**
         * The URL to which users are automatically returned after 3DS2 if it is triggered (i.e., if the SecureModeNeeded parameter is set to true).
         */
        SecureModeReturnURL: string;

        /**
         * The IP address of the end user initiating the transaction, in IPV4 or IPV6 format.
         */
        IpAddress: string;

        /**
         * Information about the browser used by the end user (author) to perform the payment.
         */
        BrowserInfo: base.BrowserInfoData;

        /**
         * Custom data that you can add to this object.
         */
        Tag?: string;
    }
}
