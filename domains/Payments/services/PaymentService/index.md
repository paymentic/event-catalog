---
name: PaymentService
summary: |
  The payment service accepts payment events from users and coordinates the payment process.   
owners:
    - claudioed
repository:
  language: java
  url: https://github.com/paymentic/payment-service
---

The payment service accepts payment events from users and coordinates the payment process.   
The first thing it usually does is a risk check, assessing for compliance with regulations such as AML/CFT [2],   
and for evidence of criminal activity such as money laundering or financing of terrorism.
The payment service only processes payments that pass this risk check. Usually, the risk check service uses a third-party provider
because it is very complicated and highly specialized.

This service will also generate Async events for downstream services.

<NodeGraph />