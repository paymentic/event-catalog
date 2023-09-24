---
name: Ledger
summary: |
  The ledger keeps a financial record of the payment transaction
owners:
    - claudioed
repository:
  language: java
  url: https://github.com/paymentic/ledger
---

The ledger keeps a financial record of the payment transaction.   
For example, when a user pays the seller $1, we record it as debit $1 from a user and credit $1 to the seller. The ledger system is very important in post-payment analysis, such as calculating the total revenue of the e-commerce website or forecasting future revenue.


This service will also generate Async events for downstream services.

<NodeGraph />

<OpenAPI />

<AsyncAPI />