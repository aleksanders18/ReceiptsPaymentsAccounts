const updateReceiptFigs = () => {
  // Set Table Variables
  const table = document.getElementById("accountsTable");
  let tRows = table.tBodies[0].rows.length - 1;

  //Set Variables
  let i,
    uf = 0,
    rf = 0,
    ef = 0,
    total = 0,
    pf = 0,
    urTotal = 0,
    rTotal = 0,
    eTotal = 0,
    totalFunds = 0,
    pTotal = 0;

  //Loop through rows to get column totals
  for (i = 1; i < tRows; i++) {
    uf = Number(document.getElementById(`u${String(i)}r`).value);
    rf = Number(document.getElementById(`r${String(i)}r`).value);
    ef = Number(document.getElementById(`e${String(i)}r`).value);
    pf = Number(document.getElementById(`p${String(i)}r`).value);
    total = uf + rf + ef;
    document.getElementById(`t${String(i)}r`).value = total;
    urTotal += uf;
    rTotal += rf;
    eTotal += ef;
    totalFunds += total;
    pTotal += pf;
  }

  // Calculate and change Receipt Totals
  document.getElementById("uFundsRTotal").innerHTML = urTotal;
  document.getElementById("rFundsRTotal").innerHTML = rTotal;
  document.getElementById("eFundsRTotal").innerHTML = eTotal;
  document.getElementById("tFundsRTotal").innerHTML = totalFunds;
  document.getElementById("pFundsRTotal").innerHTML = pTotal;

  //Update net figures
  updateNet();
};

const addReceipt = () => {
  //Create New Row
  const table = document.getElementById("accountsTable");
  let tRows = table.tBodies[0].rows.length;
  let newRow = table.insertRow(tRows);

  // Start adding cells with HTML across new row
  let cell1 = newRow.insertCell(0);
  tRows--;
  cell1.innerHTML = `<input type="text" id="receipt${String(
    tRows
  )}" value="Receipt ${String(tRows)}" required />`;

  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = `<input
type="number"
value="0"
id="u${tRows}r"
onchange="updateReceiptFigs()"
/>`;

  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<input
type="number"
value="0"
id="r${tRows}r"
onchange="updateReceiptFigs()"
/>`;

  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<input
type="number"
value="0"
id="e${tRows}r"
onchange="updateReceiptFigs()"
/>`;

  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<input
type="number"
value="0"
id="t${tRows}r"
disabled
/>`;

  let cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<input
type="number"
value="0"
id="p${tRows}r" 
onchange="updateReceiptFigs()"
/>`;
};

const updatePaymentFigs = () => {
  //Set Table Variables
  const table = document.getElementById("accountsTable");
  let tRows = table.tBodies[3].rows.length - 1;

  //Set Variables
  let i,
    uf = 0,
    rf = 0,
    ef = 0,
    total = 0,
    pf = 0,
    urTotal = 0,
    rTotal = 0,
    eTotal = 0,
    totalFunds = 0,
    pTotal = 0;

  // Loop through each row to get column totals
  for (i = 1; i < tRows; i++) {
    uf = Number(document.getElementById(`u${String(i)}p`).value);
    rf = Number(document.getElementById(`r${String(i)}p`).value);
    ef = Number(document.getElementById(`e${String(i)}p`).value);
    pf = Number(document.getElementById(`p${String(i)}p`).value);
    total = uf + rf + ef;
    document.getElementById(`t${String(i)}p`).value = total;
    urTotal += uf;
    rTotal += rf;
    eTotal += ef;
    totalFunds += total;
    pTotal += pf;
  }
  // Update Payment Totals
  document.getElementById("uFundsPTotal").innerHTML = urTotal;
  document.getElementById("rFundsPTotal").innerHTML = rTotal;
  document.getElementById("eFundsPTotal").innerHTML = eTotal;
  document.getElementById("tFundsPTotal").innerHTML = totalFunds;
  document.getElementById("pFundsPTotal").innerHTML = pTotal;

  //Update net figures
  updateNet();
};

const addPayment = () => {
  //Create new row
  const table = document.getElementById("accountsTable");
  let tRows =
    table.tBodies[0].rows.length +
    table.tBodies[1].rows.length +
    table.tBodies[2].rows.length +
    table.tBodies[3].rows.length;
  let newRow = table.insertRow(tRows);

  //Create cells and update HTML
  let cell1 = newRow.insertCell(0);
  tRows = table.tBodies[3].rows.length - 2;
  cell1.innerHTML = `<input type="text" id="payment${String(
    tRows
  )}" value="Payment ${String(tRows)}" required />`;

  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = `<input
  type="number"
  value="0"
  id="u${tRows}p"
  onchange="updatePaymentFigs()"
  />`;

  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<input
  type="number"
  value="0"
  id="r${tRows}p"
  onchange="updatePaymentFigs()"
  />`;

  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<input
  type="number"
  value="0"
  id="e${tRows}p"
  onchange="updatePaymentFigs()"
  />`;

  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<input
  type="number"
  value="0"
  id="t${tRows}p"
  disabled
  />`;

  let cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<input
  type="number"
  value="0"
  id="p${tRows}p" 
  onchange="updatePaymentFigs()"
  />`;
};

const updateNet = () => {
  // Set Receipt Variables
  const uReceipts = Number(document.getElementById("uFundsRTotal").innerHTML);
  const rReceipts = Number(document.getElementById("rFundsRTotal").innerHTML);
  const eReceipts = Number(document.getElementById("eFundsRTotal").innerHTML);
  const totalReceipts = Number(
    document.getElementById("tFundsRTotal").innerHTML
  );
  const pReceipts = Number(document.getElementById("pFundsRTotal").innerHTML);

  // Set Payment Variables
  const uPayments = Number(document.getElementById("uFundsPTotal").innerHTML);
  const rPayments = Number(document.getElementById("rFundsPTotal").innerHTML);
  const ePayments = Number(document.getElementById("eFundsPTotal").innerHTML);
  const totalPayments = Number(
    document.getElementById("tFundsPTotal").innerHTML
  );
  const pPayments = Number(document.getElementById("pFundsPTotal").innerHTML);

  //Set Net Variables and Update Net Amounts
  let uNet = uReceipts - uPayments;
  let rNet = rReceipts - rPayments;
  let eNet = eReceipts - ePayments;
  let tNet = totalReceipts - totalPayments;
  let pNet = pReceipts - pPayments;
  document.getElementById("uNet").innerHTML = uNet;
  document.getElementById("rNet").innerHTML = rNet;
  document.getElementById("eNet").innerHTML = eNet;
  document.getElementById("tNet").innerHTML = tNet;
  document.getElementById("pNet").innerHTML = pNet;

  // Set Transfer Variables
  const uTransfer = Number(document.getElementById("uTransfer").value);
  const rTransfer = Number(document.getElementById("rTransfer").value);
  const eTransfer = Number(document.getElementById("eTransfer").value);
  const tTransfer = Number(document.getElementById("tTransfer").value);
  const pTransfer = Number(document.getElementById("pTransfer").value);

  // Set Opening Balance Variables
  const uOpening = Number(document.getElementById("uOpening").value);
  const rOpening = Number(document.getElementById("rOpening").value);
  const eOpening = Number(document.getElementById("eOpening").value);
  const tOpening = Number(document.getElementById("tOpening").value);
  const pOpening = Number(document.getElementById("pOpening").value);

  //Update Closing Amounts
  document.getElementById("uClosing").innerHTML = uNet + uTransfer + uOpening;
  document.getElementById("rClosing").innerHTML = rNet + rTransfer + rOpening;
  document.getElementById("eClosing").innerHTML = eNet + eTransfer + eOpening;
  document.getElementById("tClosing").innerHTML = tNet + tTransfer + tOpening;
  document.getElementById("pClosing").innerHTML = pNet + pTransfer + pOpening;
};

const updateTransfers = () => {
  //Update Transfers
  const uTransfer = Number(document.getElementById("uTransfer").value);
  const rTransfer = Number(document.getElementById("rTransfer").value);
  const eTransfer = Number(document.getElementById("eTransfer").value);
  let tTransfer = document.getElementById("tTransfer");
  tTransfer.value = uTransfer + rTransfer + eTransfer;

  // Update Net
  updateNet();
};

const updateFunds = () => {
  //Update Opening Cash Funds total
  const uOpening = Number(document.getElementById("uOpening").value);
  const rOpening = Number(document.getElementById("rOpening").value);
  const eOpening = Number(document.getElementById("eOpening").value);
  let tOpening = document.getElementById("tOpening");
  tOpening.value = uOpening + rOpening + eOpening;

  // Update Net
  updateNet();
};

const print = () => {
  //Transfer table to new sheet
  let htmlTable = document.getElementById("accounts").innerHTML;
  let printSheet = window.open();
  printSheet.document.write(htmlTable);

  // Change input values on original table
  let i,
    val,
    input = document
      .getElementById("accountsTable")
      .getElementsByTagName("input"),
    span,
    newInput = printSheet.document
      .getElementById("accountsTable")
      .getElementsByTagName("input");
  inputCount = document.getElementsByTagName("input").length - 5;

  for (i = inputCount; i > -1; i--) {
    val = input[i].value;
    span = document.createElement("span");
    span.innerHTML = val;
    let td = newInput[i].parentNode;
    if (input[i].type == "number") {
      td.setAttribute("style", "text-align: center");
    }
    td.removeChild(newInput[i]);
    td.appendChild(span);
  }

  // Change style of total numbers
  let els = printSheet.document.querySelectorAll(".total-number");
  for (i = 0; i < els.length; i++) {
    els[i].setAttribute("style", "text-align: center");
  }

  // Change font of accounts
  let table = printSheet.document.getElementById("accountsTable");
  const font = document.getElementById("fontSelection").value;
  table.setAttribute("style", `font-family: ${font}`);

  // Remove Buttons
  let buttons = table.getElementsByTagName("button");
  for (i = buttons.length - 1; i > -1; i--) {
    let button = buttons[i].parentNode;
    button.removeChild(buttons[i]);
  }

  //Add Headers
  const name = document.getElementById("charityName").value;

  // manipulate date
  let yearEnd = new Date(document.getElementById("yearEnd").value);
  yearEnd = changeDate(yearEnd);

  let newTitle = printSheet.document.createElement("header");
  newTitle.innerHTML = `<h3>${name} <br> Receipts and Payments Accounts <br>for the year ended ${yearEnd}</h3>`;
  let header = printSheet.document.body;
  newTitle.style.fontFamily = font;
  newTitle.style.textAlign = "center";
  header.parentNode.insertBefore(newTitle, header);

  //Remove Blank Columns
  deleteBlankFunds(input, inputCount, printSheet);
  deleteBlankRows(input, inputCount, printSheet);
};

const changeDate = (dateValue) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const yMonth = months[dateValue.getMonth()];
  const yYear = dateValue.getFullYear();
  const yDay = dateValue.getDate();
  return `${yDay} ${yMonth} ${yYear}`;
};

const deleteBlankFunds = (input, inputCount, newSheet) => {
  //Calculate whether all restricted / endowment values are zero in order to delete columns
  let rCount = 0,
    rBlank = 0,
    eCount = 0,
    eBlank = 0,
    row = newSheet.document.getElementById("accountsTable").rows;

  //Tally up 0 values against value count
  for (i = inputCount; i > -1; i--) {
    if (input[i].type == "number") {
      if (input[i].id.slice(0, 1) == "r") {
        rCount += 1;
        if (input[i].value == "0") {
          rBlank += 1;
        }
      } else if (input[i].id.slice(0, 1) == "e") {
        eCount += 1;
        if (input[i].value == "0") {
          eBlank += 1;
        }
      }
    }
  }
  // Delete columns if appropriate
  if (eCount === eBlank) {
    for (let i = 0; i < row.length; i++) {
      if (row[i].cells.length > 1) {
        row[i].deleteCell(3);
      }
    }
  }
  if (rCount === rBlank) {
    for (let i = 0; i < row.length; i++) {
      if (row[i].cells.length > 1) {
        row[i].deleteCell(2);
      }
    }
  }
};

const deleteBlankRows = (input, inputCount, newSheet) => {
  // See if option ticked
  if (document.getElementById("removeRows").checked == true) {
    // Set Variables
    let uValue, rValue, eValue, pValue, row;
    //Loop through each row in reverse order
    for (i = inputCount; i > -1; i--) {
      let x = input[i].id.slice(-2, -1);
      if (isNaN(Number(x))) {
        //do nothing
      } else {
        //look through amounts
        let t = input[i].id.slice(-1);
        uValue = Number(document.getElementById(`u${x}${t}`).value);
        rValue = Number(document.getElementById(`r${x}${t}`).value);
        eValue = Number(document.getElementById(`e${x}${t}`).value);
        pValue = Number(document.getElementById(`p${x}${t}`).value);
        if (t == "p") {
          if (uValue == 0 && 0 == eValue && 0 == pValue && rValue == 0) {
            row = input[i].parentNode.parentNode.rowIndex;
            newSheet.document.getElementById("accountsTable").deleteRow(row);
            i -= 4;
          }
        } else if (t == "r") {
          if (uValue == 0 && 0 == eValue && 0 == pValue && rValue == 0) {
            row = input[i].parentNode.parentNode.rowIndex;
            newSheet.document.getElementById("accountsTable").deleteRow(row);
          i -= 4;
          }
        } else {
          console.log(t);
        }
      }
    }
  }
};

const toggleHeaders = (event) => {
  var span, input, text;

  // Get the event (handle MS difference)
  event = event || window.event;

  // Get the root element of the event (handle MS difference)
  span = event.target || event.srcElement;

  // If it's a span...
  if (span && span.tagName.toUpperCase() === "SPAN") {
    // Hide it
    span.style.display = "none";

    // Get its text
    text = span.innerHTML;

    // Create an input
    input = document.createElement("input");
    input.type = "text";
    input.value = text;
    // input.size = Math.max((text.length / 4) * 3, 4);
    span.parentNode.insertBefore(input, span);

    // Focus it, hook blur to undo
    input.focus();
    input.onblur = function () {
      // Remove the input
      span.parentNode.removeChild(input);

      // Update the span
      span.innerHTML = input.value == "" ? "&nbsp;" : input.value;

      // Show the span again
      span.style.display = "";
    };
  }
};
