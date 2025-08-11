document.addEventListener('DOMContentLoaded', () => {
  const userName = 'Jane Doe';
  const nextDate = '2024-06-15';
  const totalAmount = 2500;
  const rotations = [
    { name: 'July Round', date: '2024-07-01' },
    { name: 'August Round', date: '2024-08-01' }
  ];

  document.getElementById('user-name').textContent = userName;
  document.getElementById('next-date').textContent = nextDate;
  document.getElementById('total-amount').textContent = `$${totalAmount.toLocaleString()}`;

  const rotationList = document.getElementById('rotation-list');
  rotations.forEach((r) => {
    const li = document.createElement('li');
    li.textContent = `${r.name} - ${r.date}`;
    rotationList.appendChild(li);
  });
});
