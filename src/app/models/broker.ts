export class BrokerAccount {
    name: String
    currency: String = "VND"
    currency_sign: String = "đ"
    broker_account_id: String
    broker_name: String
    sso_access_token: String
    sso_refresh_token: String
    sso_token_expired_date: Date
    is_connected: boolean = false
}