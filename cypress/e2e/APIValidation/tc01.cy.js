/*

Client Side ---------->Server Side

Server Side ---------->Client Side

//-------------------  API Validation  -------------------//

Get Request
Post Request
Put Request
Patch Request
Delete Request  

CRUD - Create Read Update Delete

Registration --> Post Request
Login --> Post Request

Payload - JSON Format
Request Payload
Response Payload


GET - Reading the data

Endpoint - 
https://www.noon.com/_vs/nc/mp-noon-api-cart/cart

Request Method - GET

Response Payload - 

{
    "apiVersion": 1,
    "isGuest": true,
    "cartCount": 1,
    "items": [
        {
            "offerCode": "d859d4d9078a4b2c",
            "variantKey": "",
            "skuConfig": "N53418688A",
            "quantity": 1,
            "quantityMax": 1,
            "unitPrice": "265.90",
            "flags": [
                "refund_2x",
                "quick_atc",
                "rocket"
            ],
            "imageKey": "v1688969722/N53418688A_1",
            "isFbn": false,
            "kind": "offer",
            "quantityMin": 1,
            "brand": null,
            "title": null,
            "titleShort": null,
            "titleSize": null,
            "colour": null,
            "storeName": null,
            "isReturnable": false,
            "estimatedDelivery": null,
            "estimatedDeliveryDate": null,
            "estimatedDeliveryExpires": null,
            "estimatedDeliveryVIP": null,
            "feeMsg": null,
            "isFeeIconLeft": false,
            "feeIcon": null,
            "fastShippingMessage": null,
            "warranty": null,
            "originalPrice": null,
            "foupon": {
                "state": null,
                "message": null
            },
            "shippingFeeGroupKey": null,
            "discountTags": null,
            "catalogTag": null,
            "catalogTagType": null,
            "refundInfo": null,
            "customizationAnswers": [],
            "isExtendedWarrantyEligible": false,
            "extendedWarranty": null
        }
    ],
    "offers": [
        {
            "offerCode": "d859d4d9078a4b2c",
            "skuConfig": "N53418688A",
            "quantity": 1,
            "quantityMax": 1,
            "quantityMin": 1,
            "foupon": null,
            "customizationAnswers": []
        }
    ],
    "invoice": {
        "subtotal": "265.90",
        "total": "265.90",
        "feeShipping": null,
        "vipShipping": null,
        "feeRocket": null,
        "vipRocket": null,
        "customs": null,
        "extendedWarranties": null,
        "discountCoupon": null,
        "cashbackCoupon": null,
        "cashbackIcon": null,
        "cobrandEntries": null
    },
    "oneDayPush": null,
    "cms": {},
    "payments": [],
    "messages": [],
    "emiPlans": [],
    "savedcart": [],
    "vipPush": null,
    "savedcartCount": 0,
    "subscription": null,
    "progressBar": null,
    "cartFreebies": null,
    "showVipPush": false,
    "collectionMessage": "",
    "cashbackMessage": null,
    "applicableCoupons": [],
    "gotoCheckoutV2": true,
    "cobrandCashbackIcon": "",
    "bnplMaxInstallments": {},
    "estimatedDeliveryCity": -1,
    "cobrandCashbackMessage": "",
    "rocketFeeGroupDetails": {},
    "shippingFeeGroupDetails": {},
    "importFeeGroupDetails": {},
    "coupon": {
        "code": null,
        "error": null,
        "errorHTML": null,
        "message": null
    },
    "couponTray": {
        "coupons": [],
        "couponsV2": [],
        "raffles": [],
        "bankDiscounts": []
    },
    "analytics": {
        "cmsEids": [],
        "version": 2
    },
    "supermallDeliveryMessage": null,
    "rocketTab": null
}


Status Code - 5 Series
1XX - Informational
2XX - Success
3XX - Redirection
4XX - Client Error
5XX - Server Error

200 - OK
201 - Created
202 - Accepted
204 - No Content

400 - Bad Request
401 - Unauthorized
403 - Forbidden
404 - Not Found
405 - Method Not Allowed

500 - Internal Server Error
501 - Not Implemented
502 - Bad Gateway
503 - Service Unavailable
504 - Gateway Timeout   
//-------------------  API Validation  -------------------//    


*/