const { transformItem } = require("../utils");

describe("transformItem", () => {
  test("it should not transform", (done) => {
    const item = {
      id: "MLA873666617",
      site_id: "MLA",
      title: "LG K50 32 Gb Aurora Black 3 Gb Ram",
      seller: {
        id: 611345919,
        permalink: "http://perfil.mercadolibre.com.ar/AGEN-SA",
        registration_date: "2020-07-17T16:53:39.000-04:00",
        car_dealer: false,
        real_estate_agency: false,
        tags: ["normal", "user_info_verified", "mshops", "messages_as_seller"],
        seller_reputation: {
          transactions: {
            total: 47,
            canceled: 1,
            period: "historic",
            ratings: {
              negative: 0,
              positive: 1,
              neutral: 0,
            },
            completed: 46,
          },
          power_seller_status: null,
          metrics: {
            claims: {
              rate: 0,
              value: 2,
              period: "365 days",
            },
            delayed_handling_time: {
              rate: 0,
              value: 0,
              period: "365 days",
            },
            sales: {
              period: "365 days",
              completed: 46,
            },
            cancellations: {
              rate: 0,
              value: 0,
              period: "365 days",
            },
          },
          level_id: "5_green",
        },
      },
      price: 18999,
      prices: {},
      sale_price: null,
      currency_id: "ARS",
      available_quantity: 3652,
      sold_quantity: 560,
      buying_mode: "buy_it_now",
      listing_type_id: "gold_pro",
      stop_time: "2040-10-25T23:41:41.000Z",
      condition: "new",
      permalink:
        "https://www.mercadolibre.com.ar/lg-k50-32-gb-aurora-black-3-gb-ram/p/MLA15166947",
      thumbnail:
        "http://http2.mlstatic.com/D_956213-MLA40025451632_122019-I.jpg",
      accepts_mercadopago: true,
      installments: {
        quantity: 9,
        amount: 2111,
        rate: 0,
        currency_id: "ARS",
      },
      address: {
        state_id: "AR-C",
        state_name: "Capital Federal",
        city_id: "TUxBQlBBUjYwMzZa",
        city_name: "Parque Patricios",
      },
      shipping: {
        free_shipping: true,
        mode: "me2",
        tags: ["mandatory_free_shipping"],
        logistic_type: "xd_drop_off",
        store_pick_up: false,
      },
      seller_address: {
        id: "",
        comment: "",
        address_line: "",
        zip_code: "",
        country: {
          id: "AR",
          name: "Argentina",
        },
        state: {
          id: "AR-C",
          name: "Capital Federal",
        },
        city: {
          id: "TUxBQlBBUjYwMzZa",
          name: "Parque Patricios",
        },
        latitude: "",
        longitude: "",
      },
      attributes: [
        {
          name: "Marca",
          value_name: "LG",
          value_struct: null,
          values: [
            {
              id: "215",
              name: "LG",
              struct: null,
              source: 1,
            },
          ],
          source: 1,
          id: "BRAND",
          value_id: "215",
          attribute_group_id: "OTHERS",
          attribute_group_name: "Otros",
        },
        {
          name: "Modelo de GPU",
          value_name: "PowerVR GE8320",
          values: [
            {
              id: "7498817",
              name: "PowerVR GE8320",
              struct: null,
              source: 1,
            },
          ],
          attribute_group_id: "OTHERS",
          id: "GPU_MODEL",
          value_struct: null,
          attribute_group_name: "Otros",
          source: 1,
          value_id: "7498817",
        },
        {
          value_struct: null,
          value_name: "Nuevo",
          values: [
            {
              id: "2230284",
              name: "Nuevo",
              struct: null,
              source: 6808261514773724,
            },
          ],
          attribute_group_id: "OTHERS",
          attribute_group_name: "Otros",
          source: 6808261514773724,
          id: "ITEM_CONDITION",
          name: "Condición del ítem",
          value_id: "2230284",
        },
        {
          name: "Línea",
          values: [
            {
              id: "436962",
              name: "K Series",
              struct: null,
              source: 1,
            },
          ],
          attribute_group_id: "OTHERS",
          attribute_group_name: "Otros",
          id: "LINE",
          value_id: "436962",
          value_name: "K Series",
          value_struct: null,
          source: 1,
        },
        {
          attribute_group_id: "OTHERS",
          name: "Modelo",
          value_id: "43854",
          value_name: "K50",
          attribute_group_name: "Otros",
          source: 1,
          id: "MODEL",
          value_struct: null,
          values: [
            {
              id: "43854",
              name: "K50",
              struct: null,
              source: 1,
            },
          ],
        },
        {
          id: "PROCESSOR_MODEL",
          value_name: "MediaTek MT6762 Helio P22",
          value_struct: null,
          values: [
            {
              source: 1,
              id: "6972946",
              name: "MediaTek MT6762 Helio P22",
              struct: null,
            },
          ],
          source: 1,
          name: "Modelo del procesador",
          value_id: "6972946",
          attribute_group_id: "OTHERS",
          attribute_group_name: "Otros",
        },
        {
          value_id: "1238",
          value_name: "170 g",
          values: [
            {
              id: "1238",
              name: "170 g",
              struct: {
                number: 170,
                unit: "g",
              },
              source: 1,
            },
          ],
          attribute_group_id: "OTHERS",
          attribute_group_name: "Otros",
          source: 1,
          name: "Peso",
          value_struct: {
            number: 170,
            unit: "g",
          },
          id: "WEIGHT",
        },
      ],
      differential_pricing: {
        id: 35713248,
      },
      original_price: 29999,
      category_id: "MLA1055",
      official_store_id: null,
      domain_id: "MLA-CELLPHONES",
      catalog_product_id: "MLA15166947",
      tags: [
        "good_quality_thumbnail",
        "loyalty_discount_eligible",
        "brand_verified",
        "deal_of_the_day",
        "extended_warranty_eligible",
        "good_quality_picture",
        "immediate_payment",
        "cart_eligible",
      ],
      catalog_listing: true,
      order_backend: 1,
    };
    const expectedOutput = {
      id: "MLA873666617",
      title: "LG K50 32 Gb Aurora Black 3 Gb Ram",
      price: {
        currency: "ARS",
        amount: 18999,
      },
    };
    const output = transformItem(item);
    expect(output).toEqual(expectedOutput);
    done();
  });

  test("it should not transform", (done) => {
    const item = {
      id: "MLA861125242",
      site_id: "MLA",
      title: "Samsung Galaxy Z Flip 256 Gb Mirror Purple 8 Gb Ram",
      seller: {
        id: 480448894,
        permalink: "http://perfil.mercadolibre.com.ar/ELECTRONICARGML",
        registration_date: "2019-10-16T10:37:00.000-04:00",
        car_dealer: false,
        real_estate_agency: false,
        tags: [
          "brand",
          "user_info_verified",
          "large_seller",
          "messages_as_seller",
        ],
        seller_reputation: {
          transactions: {
            total: 104412,
            canceled: 6332,
            period: "historic",
            ratings: {
              negative: 0.04,
              positive: 0.94,
              neutral: 0.02,
            },
            completed: 98080,
          },
          power_seller_status: "platinum",
          metrics: {
            claims: {
              rate: 0.0036,
              value: 44,
              period: "60 days",
            },
            delayed_handling_time: {
              rate: 0,
              value: 0,
              period: "60 days",
            },
            sales: {
              period: "60 days",
              completed: 11459,
            },
            cancellations: {
              rate: 0,
              value: 0,
              period: "60 days",
            },
          },
          level_id: "5_green",
        },
      },
      price: 97999,
      prices: {},
      sale_price: null,
      currency_id: "ARS",
      available_quantity: 53,
      sold_quantity: 183,
      buying_mode: "buy_it_now",
      listing_type_id: "gold_pro",
      stop_time: "2040-06-04T04:00:00.000Z",
      condition: "new",
      permalink:
        "https://www.mercadolibre.com.ar/samsung-galaxy-z-flip-256-gb-mirror-purple-8-gb-ram/p/MLA15702470",
      thumbnail:
        "http://http2.mlstatic.com/D_863283-MLA43816597421_102020-I.jpg",
      accepts_mercadopago: true,
      installments: {
        quantity: 9,
        amount: 10888.78,
        rate: 0,
        currency_id: "ARS",
      },
      address: {
        state_id: "AR-B",
        state_name: "Buenos Aires",
        city_id: null,
        city_name: "Villa Celina",
      },
      shipping: {
        free_shipping: true,
        mode: "me2",
        tags: ["fulfillment", "mandatory_free_shipping"],
        logistic_type: "fulfillment",
        store_pick_up: false,
      },
      seller_address: {
        id: "",
        comment: "",
        address_line: "",
        zip_code: "",
        country: {
          id: "AR",
          name: "Argentina",
        },
        state: {
          id: "AR-B",
          name: "Buenos Aires",
        },
        city: {
          id: null,
          name: "Villa Celina",
        },
        latitude: "",
        longitude: "",
      },
      attributes: [
        {
          id: "BRAND",
          attribute_group_id: "OTHERS",
          source: 1,
          name: "Marca",
          value_id: "206",
          value_name: "Samsung",
          value_struct: null,
          values: [
            {
              id: "206",
              name: "Samsung",
              struct: null,
              source: 1,
            },
          ],
          attribute_group_name: "Otros",
        },
        {
          value_id: "7686099",
          value_name: "Adreno 640",
          attribute_group_id: "OTHERS",
          attribute_group_name: "Otros",
          name: "Modelo de GPU",
          value_struct: null,
          values: [
            {
              id: "7686099",
              name: "Adreno 640",
              struct: null,
              source: 1,
            },
          ],
          source: 1,
          id: "GPU_MODEL",
        },
        {
          id: "ITEM_CONDITION",
          name: "Condición del ítem",
          value_name: "Nuevo",
          value_struct: null,
          values: [
            {
              id: "2230284",
              name: "Nuevo",
              struct: null,
              source: 8748668969142,
            },
          ],
          value_id: "2230284",
          attribute_group_id: "OTHERS",
          attribute_group_name: "Otros",
          source: 8748668969142,
        },
        {
          attribute_group_id: "OTHERS",
          source: 1,
          value_id: "8259892",
          value_name: "Galaxy Z",
          values: [
            {
              id: "8259892",
              name: "Galaxy Z",
              struct: null,
              source: 1,
            },
          ],
          attribute_group_name: "Otros",
          id: "LINE",
          name: "Línea",
          value_struct: null,
        },
        {
          id: "MODEL",
          name: "Modelo",
          value_struct: null,
          attribute_group_id: "OTHERS",
          source: 1,
          value_id: "8259891",
          value_name: "Z Flip",
          values: [
            {
              id: "8259891",
              name: "Z Flip",
              struct: null,
              source: 1,
            },
          ],
          attribute_group_name: "Otros",
        },
        {
          name: "Largo del paquete",
          value_id: null,
          value_name: "6 cm",
          values: [
            {
              id: null,
              name: "6 cm",
              struct: {
                number: 6,
                unit: "cm",
              },
              source: 1,
            },
          ],
          attribute_group_id: "OTHERS",
          source: 1,
          id: "PACKAGE_LENGTH",
          value_struct: {
            number: 6,
            unit: "cm",
          },
          attribute_group_name: "Otros",
        },
        {
          id: "PACKAGE_WEIGHT",
          values: [
            {
              id: null,
              name: "500 g",
              struct: {
                number: 500,
                unit: "g",
              },
              source: 1,
            },
          ],
          attribute_group_name: "Otros",
          name: "Peso del paquete",
          value_id: null,
          value_name: "500 g",
          value_struct: {
            number: 500,
            unit: "g",
          },
          attribute_group_id: "OTHERS",
          source: 1,
        },
        {
          name: "Modelo del procesador",
          value_name: "Snapdragon 855+",
          value_struct: null,
          values: [
            {
              id: "7862057",
              name: "Snapdragon 855+",
              struct: null,
              source: 1,
            },
          ],
          id: "PROCESSOR_MODEL",
          value_id: "7862057",
          attribute_group_id: "OTHERS",
          attribute_group_name: "Otros",
          source: 1,
        },
        {
          name: "Peso",
          value_id: "7084409",
          value_struct: {
            number: 183,
            unit: "g",
          },
          values: [
            {
              id: "7084409",
              name: "183 g",
              struct: {
                number: 183,
                unit: "g",
              },
              source: 1,
            },
          ],
          source: 1,
          id: "WEIGHT",
          value_name: "183 g",
          attribute_group_id: "OTHERS",
          attribute_group_name: "Otros",
        },
      ],
      differential_pricing: {
        id: 35713248,
      },
      original_price: 139999,
      category_id: "MLA1055",
      official_store_id: 1550,
      domain_id: "MLA-CELLPHONES",
      catalog_product_id: "MLA15702470",
      tags: [
        "brand_verified",
        "deal_of_the_day",
        "good_quality_picture",
        "good_quality_thumbnail",
        "loyalty_discount_eligible",
        "immediate_payment",
        "cart_eligible",
        "shipping_guaranteed",
      ],
      catalog_listing: true,
      order_backend: 3,
    };
    const expectedOutput = {
      id: "MLA861125242",
      title: "Samsung Galaxy Z Flip 256 Gb Mirror Purple 8 Gb Ram",
      price: {
        currency: "ARS",
        amount: 97999,
      },
    };
    const output = transformItem(item);
    expect(output).toEqual(expectedOutput);
    done();
  });
});
