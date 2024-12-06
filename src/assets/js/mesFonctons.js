// Graphique des ventes
const salesCtx = document.getElementById('salesChart').getContext('2d');
new Chart(salesCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai'],
    datasets: [{
      label: 'Ventes',
      data: [4000, 3000, 2000, 2780, 1890],
      backgroundColor: 'rgba(106, 90, 205, 0.7)',
      borderColor: 'rgba(106, 90, 205, 1)',
      borderWidth: 1
    }, {
      label: 'Visiteurs',
      data: [2400, 1398, 9800, 3908, 4800],
      backgroundColor: 'rgba(32, 178, 170, 0.7)',
      borderColor: 'rgba(32, 178, 170, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Graphique de croissance des revenus
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai'],
    datasets: [{
      label: 'Revenus',
      data: [4000, 3000, 2000, 2780, 1890],
      borderColor: 'rgba(106, 90, 205, 1)',
      backgroundColor: 'rgba(106, 90, 205, 0.2)',
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Gestion du toggle de la sidebar
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.getElementById('toggleSidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
