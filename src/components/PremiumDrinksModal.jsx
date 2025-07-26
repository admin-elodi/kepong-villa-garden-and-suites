 
 
 
 
const PremiumDrinksModal = () => {
    const drinksList = [
    { id: 'whisky', name: 'Don Julio', price: 500000, img: redLabel },
    { id: 'hennessyxo', name: 'Henessy X.O', price: 450000, img: vodka },
    { id: 'wine', name: 'Four cousins', price: 20000, img: redWine },
  ];

  const SERVICE_CHARGE_RATE = 0.05;

  // WhatsApp number for barman (international format, no '+' or spaces)
  const barmanNumber = '2349169436106';

  const openModal = () => {
    setIsModalOpen(true);
    setShowBankDetails(false);
    setSelectedDrinks({});
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowBankDetails(false);
    setSelectedDrinks({});
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen]);

  const updateDrinkQuantity = (id, qty) => {
    if (qty < 0) return;
    setSelectedDrinks((prev) => {
      const newSelection = { ...prev };
      if (qty === 0) {
        delete newSelection[id];
      } else {
        newSelection[id] = qty;
      }
      return newSelection;
    });
  };

  const totalPrice = Object.entries(selectedDrinks).reduce((total, [id, qty]) => {
    const drink = drinksList.find((d) => d.id === id);
    return total + (drink ? drink.price * qty : 0);
  }, 0);

  const serviceCharge = Math.round(totalPrice * SERVICE_CHARGE_RATE);

  const handlePayNow = () => {
    if (totalPrice === 0) {
      alert('Please select at least one drink before proceeding to pay.');
      return;
    }
    setShowBankDetails(true);
  };

  const orderLines = Object.entries(selectedDrinks)
    .map(([id, qty]) => {
      const drink = drinksList.find(d => d.id === id);
      if (!drink) return null;
      return `- ${drink.name} × ${qty} = ₦${(drink.price * qty).toLocaleString()}`;
    })
    .filter(x => x)
    .join('\n');

  const whatsappMessage = encodeURIComponent(
    `Hello, I have made payment for the following drinks at Club K:\n${orderLines}\n\nSubtotal: ₦${totalPrice.toLocaleString()}\nService Charge (5%): ₦${serviceCharge.toLocaleString()}\nTOTAL: ₦${(totalPrice + serviceCharge).toLocaleString()}\n\nPlease find my payment evidence attached.`
  );
  const whatsappLink = `https://wa.me/${barmanNumber}?text=${whatsappMessage}`;

    return (

    )
}
 
 
 