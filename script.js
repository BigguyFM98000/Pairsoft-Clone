function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const navEnding = document.querySelector('.nav-ending');

    // Toggle the "show" class on both nav lists
    navList.classList.toggle('show');
    navEnding.classList.toggle('show');
}

window.onload = function() {
  showInfo(1);  // Automatically show the information for the first heading when the page loads
};

function showInfo(headingNumber) {
  const title = document.getElementById('info-title');
  const list = document.getElementById('info-list');
  
  // Clear the current list items
  list.innerHTML = '';

  // Define the heading and list items for each heading
  switch (headingNumber) {
    case 1:
      title.textContent = "Simplify Steps to Month-End Close";
      list.innerHTML = `
      <ol>
        <li>Launch custom workflow</li>
        <li>Filter documents by date</li>
        <li>Export data to Excel</li>
        <li>Create accrual entry</li>
      </ol>
      `;
      break;
    case 2:
      title.textContent = "Eliminate Approval Bottlenecks";
      list.innerHTML = `
      <ol>
        <li>Capture invoices via scanner, email, or web form</li>
        <li>Assign invoice to be approved</li>
        <li>Email notifications are sent to approver</li>
        <li>Invoice is approved via browser or mobile device</li>
      </ol>
      `;
      break;
    case 3:
      title.textContent = "Reduce AP Processing Costs";
      list.innerHTML = `
      <ol>
        <li>Capture invoices via scanner, email, or web form</li>
        <li>OCR engine extracts invoice data for you</li>
        <li>Create transactions in your ERP with one click</li>
        <li>Automatically ‘file’ document to newly created invoice record</li>
      </ol>
      `;
      break;
    case 4:
      title.textContent = "Increase Spend Management Control";
      list.innerHTML = `
      <ol>
        <li>Connect your supplier’s catalog to your ERP</li>
        <li>Browse the pre-selected inventory at negotiated prices</li>
        <li>Fill up your shopping cart</li>
        <li>Submit purchase for internal approvals</li>
        <li>Automatically validate purchase according to budget and user permissions</li>
        <li>Automatically send the purchase order directly to the vendor</li>
      </ol>
      `;
      break;
    default:
      title.textContent = "Click on a heading to see more information.";
      list.innerHTML = `<li>List item 1</li><li>List item 2</li><li>List item 3</li><li>List item 4</li>`;
  }
}

