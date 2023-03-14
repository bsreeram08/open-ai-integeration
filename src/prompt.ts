export const prompts = [
  `Partners
Surfboard partners with Independent Software Vendors (ISV) who wants to provide payment solutions in addition to their products in a simple and seamless manner to their customers. For integrating with our payment solutions, we offer a suite of white-label products that are readily available for use. Additionally, our SDKs and APIs provides you with the flexibility to build unique solutions to meet your specific needs.

A partner will be able to,
Onboard Merchants
Provide and ship terminals for merchants
Configure settings for the merchants
Register terminal and initiate transactions through APIs on behalf of the merchant
Fetch and display all merchant transactions
Use our receipt host for the digital distribution of receipts
Surfboard also partners with other Payment Facilitators in select cases to be a technical provider of payment solutions.

To get started as a partner, you can reach out to us at partner@surfboardpayments.com

Onboarding Merchants
Once a partner is onboarded, they will be able to onboard merchants to Surfboard through a pre-built, white label onboarding page. A typical user flow for onboarding would look like.

Merchant logs into Partner Portal (App-store similar)
Clicks on “Add Terminal” / ”Add Surfpay”
The partner initiates a call to our API - fetchKYBLink, during which they can pass information such as pricing plans, hardware configurations, and device options etc. If no information is provided, the default preferences will be taken into account.
The Surfboard generates and returns a link, which redirects to a custom branded version of the web KYB (Know Your Business). Additionally, a unique ID is also sent and should be stored by the partner, in relation with this particular merchant.
Partner redirects the merchant to a link inside an iframe or to another screen.
Upon completion of the KYB process, we notify the partner that the onboarding procedure has been successfully completed. We return the merchantId and storeId to the partner along with the hardware list that they have selected.
Partner stores the merchantId and storeId.
OPTIONAL FOR MULTIPLE STORES: Partner creates a store using the merchant ID (They can collect the store details earlier or they have this information earlier, or they can do this then).

Provide and Ship Terminals
As part of the onboarding, merchants will be allowed to choose one or more terminals that is pre-selected by the partner for their setup. Once the merchant selects the terminals, the terminals will be shipped to the shipping address and the information for the same will be provided to the partner

Configuration options for Partners
As a partner you can configure a number of things for the sub-merchants including, but not limited to

Devices that are available for purchase
Currency codes and Operating countries
Branding for the terminals and the KYB Screens
Other configurations like system updates, sleep time, tipping, currencies etc.
Other Actions
All other actions follow the regular flow of the Surfboard API and you can read the following sections

You might also be interested in Merchants, Stores, Terminals`,
  `Merchants
A merchant is created in Surfboard with the completion of a onboarding process. Merchant creation can be initiated through ISVs who have partnered with Surfboard to offer payment solutions to their merchants in addition to their existing products.

Merchants are associated with the following:
MCC Code: MCC stands for merchant category code, which is a four-digit number used to classify merchants by their primary type of goods or services sold. MCC is used to determine the interchange fee that a merchant pays when a customer uses their credit or debit card.
Settlement Currency: Settlement currency is the currency used to facilitate the settlement of financial transactions between the merchants and the acquiring bank. It is the currency in which payments are made and received to settle a transaction.
Transaction Currency: Transaction currency is the currency used to denote the value of goods or services being sold in a transaction.
Settlement Bank Accounts: A settlement bank account is used to receive payments from customers, process those payments, and disburse funds to the merchant's bank account.
A merchant will be able to

Onboard with Surfboard
Create and manage stores
Receive terminals
Create users for the stores
Receive the payout of funds to their linked bank account
Receive invoices, and reports for settlement reconciliation
Fetch and display all stores under them.
Onboard with Surfboard
Merchants can onboard with Surfboard through the onboarding page in the Partner Portal. For more information, reach out to the respective partner

Merchants can also onboard directly with Surfboard. Onboarding is done through Surfboard web KYB. A typical user flow for this would look like

Require information

After a successful onboarding, each merchants will be assigned with a unique Merchant Id.

Create and manage Stores
After a merchant is onboarded with Surfboard, they can create stores to process point-of-sale payments. After successful creation of stores, each store will be assigned with a unique **Store Id.** This unique Id has to be stored in relation with the merchant. Stores can be managed using APIs.

For more information on how to create stores, go to “Create Stores”

Receive Terminals
Merchants can receive terminals to accept in-person payments. While onboarding, merchants can choose from one or more terminals that are pre-configured by the partner for their setup. The terminals that are selected by the merchant will be shipped to the shipping address of the merchant and the information for the same will be provided to the partner.

Other Actions
All other actions follow the regular flow of the Surfboard API and you can read the following sections.

Create Stores, Settlement, Invoices, Register Terminals

You might also be interested in Partners, Stores, Terminals.`,
  `Stores
Stores represent the physical location of sales. A merchant can create one or more stores based on their business requirements. Each store will be identified by a unique store Id which is linked to a particular merchant.

Stores are used to
Register terminals
Process payments
Track transactions
Display/Export receipts
View reports
Registering Terminals
To process payments, each payment terminal has to be registered against the store Id of the store where the terminal is being used.

To know more about how to register terminals go to “Register Terminals”

Processing Payments
After the terminals are registered, merchants can add available payment methods. After adding the payment methods, merchants can start accepting payments from customers.

A typical flow for this would look like

Require flow

To know more about adding payment methods go to “Add payment methods”

Track Transactions
Transactions are tracked at the store level.

For each transaction,
The store name is displayed on the receipt
The store Id is required to register the transaction
The store name/address appears on the bank statement of the customer
To know more about how to create stores go to “Create stores”

You might also be interested in Partners, Merchants, Terminals, Receipts`,
  `Terminals
Surfboard offers a range of hardware terminals which can be integrated with existing ECRs and checkout systems though our APIs. Additionally, we also provide a wide range of white-label solutions for partners to integrate easily with payment solutions.

Any registered merchant in Surfboard can choose from a variety of terminals that are available to them. Partners can decide which terminals are available for their sub-merchants.

Our terminals support
Card payments
Contactless Payments
Multiple languages
Digital receipts
Flexible SDKs
Multiple connectivity options
Multiple Payment methods*
Ordering terminals
Terminals are available for merchants as part of the onboarding process. If you are a partner, you can select which terminals are accessible to your merchant. To learn more about this go to, . You can also order additional terminals from the Merchant Portal of Surfboard or the Partner.

To know more about how to order terminals, go to “Order Terminals”

Available Terminals
We offer a number of terminals to satisfy different use cases. All of our terminals can be interacted through our APIs or SDKs and can function without any reliance on local software. All terminals also ship with SIM card and support WiFi connectivity.

Model	Terminal Type	Operating System	Connectivity Options	Operating Modes	API Integration	SDK Integration	Integration with Pre-built apps	Printer
The Companion	Hardware	Custom	GSM, WiFI	Integrated, Stand-alone, UTM	Yes	No	Can be integrated with Surfpay Checkout	Through external attachment. UTM through external attachment
The One	Hardware	Android Custom	GSM, WiFI	Integrated, Stand-alone	Yes	Yes	Surfpay One. Loaded by default onto terminals. Partners can also choose Surfpay Checkout which allows to build an app switch based solution if they have an existing Android app	Through external attachment
Name Undefined	Hardware	Android Custom	GSM, WiFi	Integrated, Stand-alone	Yes	Yes	Surfpay One loaded by default. Partners can choose Surfpay checkout if they have an existing app based solution	Yes
Surfpay TTP	Software	Commercial Android which supports NFC and Google Play Services	Depends on Phone	Stand-alone mode	Yes	Yes	Can be integrated through the Mobile checkout app or a custom solution can be built	No.
Terminal Shipping
Merchants can order terminals during onboarding. When the onboarding process is completed, the terminals will be shipped to the merchants’ address.

In the event of receiving defective/malfunctioning terminals you can return the package to Surfboard.

If you have any questions or concerns about the return process, you can reach out to our customer support team for assistance at support@surfboardpayments.com

Terminal Billing
Merchants can either purchase the terminals or lease the terminals for a period of 36 months.

If you choose to purchase a terminal, you will own the device outright and will not be required to make any additional payment beyond the initial purchase price. However, you will be responsible for any maintenance or repair cost associated with the terminals.

If you choose to lease a terminal, you will enter into a binding contract with Surfboard for a period of 36 months. During this period, you need to make regular payments to cover the cost of the device and any associated fees.

If you have any questions or concerns about purchase or lease of terminals, you can reach out to us at support@surfboardpayments.com

To know more about billing process go to “Billing”.

Terminal Integration
After receiving terminals, you can integrate the terminals with your existing systems through our APIs.

To know more about how to integrate terminals go to “Terminal Integration”.

Build your own apps on Android Terminals
You can build your own apps on android terminals using our SDKs.

To know more about how to Build your own apps on Android devices go to “Build your own apps on Android Terminals”.

You might also be interested in Integrating with the API, Terminal Management, Terminal Registration, Add Payment Methods.`,
]
  .map((v) => v.split("\n").join(".").split("."))
  .flat(1) satisfies Array<string>;
