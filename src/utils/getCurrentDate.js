const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = String(today.getFullYear());
    return `${year}-${month}-${day}`;
  };

export default getCurrentDate