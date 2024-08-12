# DHL Shipping App

This is a Vue.js application designed to manage package shipping via DHL. It allows users to upload package details, process batch orders, print shipping labels, and monitor operations through a user-friendly interface.

## Features

1. **CSV Upload for Packages**: Allows users to upload CSV files containing details of packages to be shipped.
2. **Batch Order Processing**: Warehouse staff can upload CSV files with order numbers to generation labels.
3. **Label Printing**: Users can input order numbers or barcodes to retrieve and print shipping labels.
4. **Monitoring Interface**: Provides a dashboard for tracking operations and logs.

## Project Structure

```
/dhl-shipping-app
  /public
  /src
    /assets
    /components
      CsvUpload.vue
      BatchProcessing.vue
      LabelPrinting.vue
      Monitoring.vue
    /views
      UploadPage.vue
      BatchPage.vue
      PrintPage.vue
      MonitorPage.vue
    /router
      index.js
    /store
      index.js
      modules
        order.js
    /services
      api.js
    App.vue
    main.js
```

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/lentmiien/dhl-shipping-app.git
   cd dhl-shipping-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run serve
   ```

   The application will start on `http://localhost:8080`.

## CSV File Requirements

- **Order Number**: Unique identifier for each order. Present in every row.
- Each order may contain multiple items; only the first row of each order includes full customer and order details. Subsequent rows will only have the order number and item details filled in.
- Columns include: Customer Name, Address, City, Postal Code, Country Code, Item Description, Quantity, Unit Price, etc.
- Please refer to the example in documentation for a detailed CSV structure.

## Project Dependencies

- **Vue.js**: Frontend framework for building the application.
- **Vue Router**: For handling navigation between pages.
- **Vuex**: State management to handle application state and actions.
- **Axios**: For HTTP requests to the server backend.

## Further Steps

- Implement server-side validation of uploaded CSV files.
- Enhance UI using a design framework like Vuetify.
- Integrate DHL API for rate requests and label generation.
- Deploy the app on a cloud platform for production.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or report issues.

## License

This project is open-source and available under the MIT License.
