export const paymentJSON = (name: string, price: number) => {
    return {
      additional_info: {
        items: [
          {
            id: "1",
            title: name,
            description:
              "Curso de Programción de python y Django",
            category_id: "Online Course",
            quantity: 1,
            unit_price: price,
          },
        ],
        payer: {
          first_name: "Gefferson",
          last_name: "Casasola",
          phone: {
            area_code: "51",
            number: "952253272",
          },
        },
      },
      description: "Payment for product",
      installments: 1,
      token: "79bd26def12b5246faa7e68a82d37ade",
      payer: {
        entity_type: "individual",
        type: "customer",
        email: "gefferson.casasola@gmail.com",
      },
      payment_method_id: "visa",
      transaction_amount: price,
    };
  };
  