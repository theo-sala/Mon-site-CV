const ctx = document.getElementById('graph_skills').getContext('2d');

var data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python'], // Noms des compétences (axe X)
    datasets: [{
        data: [85, 70, 40, 30, 80], // Valeurs pour chaque compétence (axe Y)
        backgroundColor: [
            'rgba(246, 159, 27, 1)',
            'rgba(32, 129, 228, 1)',
            'rgba(223, 222, 24, 1)',
            'rgba(0, 194, 211, 1)',
            'rgba(153, 102, 255, 1)'
        ]
    }]
};

var options = {
    plugins: {
        legend: {
            display: false // Désactive la légende
        }
    },
    scales: {
        y: {
            beginAtZero: true, // Commence l'axe Y à 0
            max: 100,
            grid: {
                display: false // Désactive la grille sur l'axe Y
            }
        },
        x: {
            grid: {
                display: false // Désactive la grille sur l'axe X
            }
        }
    }
};

var config = {
    type: 'bar',
    data: data,
    options: options
};

// Crée et affiche le graphique
var graph_skills = new Chart(ctx, config);
