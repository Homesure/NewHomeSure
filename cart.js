function saveOrder(method, paymentID="") {
  let name = "Customer Name"; // replace with real input field later
  let contact = "9876543210"; // replace with real input field later

  fetch("https://script.google.com/macros/s/AKfycbxK9BZkE63n-UjcYqTVRrxOSoKTm3xgaxBNWSorc5o/dev", {
    method: "POST",
    body: JSON.stringify({
      name,
      contact,
      cart,
      total,
      paymentMethod: method,
      paymentID
    }),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(data => {
    console.log("✅ Order saved:", data);
  })
  .catch(err => console.error("❌ Error:", err));
}
