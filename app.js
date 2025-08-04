// Physician Compensation Dashboard JavaScript

// Data from the provided JSON
const physicianData = [
    {"Specialty": "Neurology", "Salary": 749140, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 1, "Overall_Rank": 1},
    {"Specialty": "Thoracic surgery", "Salary": 689969, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Surgical", "Rank_in_Category": 2, "Overall_Rank": 2},
    {"Specialty": "Orthopedic surgery", "Salary": 679517, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Surgical", "Rank_in_Category": 3, "Overall_Rank": 3},
    {"Specialty": "General pediatric surgery", "Salary": 647721, "Category": "Highest Paid", "Specialty_Type": "Pediatric", "Surgical": "Surgical", "Rank_in_Category": 4, "Overall_Rank": 4},
    {"Specialty": "Plastic surgery", "Salary": 621445, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Surgical", "Rank_in_Category": 5, "Overall_Rank": 5},
    {"Specialty": "Oral and maxillofacial surgery", "Salary": 616748, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Surgical", "Rank_in_Category": 6, "Overall_Rank": 6},
    {"Specialty": "Radiation oncology", "Salary": 588678, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 7, "Overall_Rank": 7},
    {"Specialty": "Cardiology", "Salary": 587360, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 8, "Overall_Rank": 8},
    {"Specialty": "Vascular surgery", "Salary": 576452, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Surgical", "Rank_in_Category": 9, "Overall_Rank": 9},
    {"Specialty": "Gastroenterology", "Salary": 573870, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 10, "Overall_Rank": 10},
    {"Specialty": "Interventional radiology", "Salary": 572617, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 11, "Overall_Rank": 11},
    {"Specialty": "Radiology", "Salary": 571749, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 12, "Overall_Rank": 12},
    {"Specialty": "Urology", "Salary": 559474, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 13, "Overall_Rank": 13},
    {"Specialty": "Otolaryngology", "Salary": 523369, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 14, "Overall_Rank": 14},
    {"Specialty": "Anesthesia", "Salary": 523277, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 15, "Overall_Rank": 15},
    {"Specialty": "Dermatology", "Salary": 508401, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 16, "Overall_Rank": 16},
    {"Specialty": "Oncology", "Salary": 502465, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 17, "Overall_Rank": 17},
    {"Specialty": "Colon and rectal surgery", "Salary": 487085, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Surgical", "Rank_in_Category": 18, "Overall_Rank": 18},
    {"Specialty": "General surgery", "Salary": 482574, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Surgical", "Rank_in_Category": 19, "Overall_Rank": 19},
    {"Specialty": "Ophthalmology", "Salary": 477232, "Category": "Highest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 20, "Overall_Rank": 20},
    {"Specialty": "Internal medicine", "Salary": 326116, "Category": "Lowest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 1, "Overall_Rank": 21},
    {"Specialty": "Rheumatology", "Salary": 324954, "Category": "Lowest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 2, "Overall_Rank": 22},
    {"Specialty": "Infectious disease", "Salary": 320730, "Category": "Lowest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 3, "Overall_Rank": 23},
    {"Specialty": "Family medicine", "Salary": 318959, "Category": "Lowest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 4, "Overall_Rank": 24},
    {"Specialty": "Pediatric emergency medicine", "Salary": 312271, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 5, "Overall_Rank": 25},
    {"Specialty": "Preventative medicine", "Salary": 310177, "Category": "Lowest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 6, "Overall_Rank": 26},
    {"Specialty": "Allergy and immunology", "Salary": 308846, "Category": "Lowest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 7, "Overall_Rank": 27},
    {"Specialty": "Pediatric gastroenterology", "Salary": 298457, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 8, "Overall_Rank": 28},
    {"Specialty": "Medicine / pediatrics", "Salary": 296665, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 9, "Overall_Rank": 29},
    {"Specialty": "Geriatrics", "Salary": 291968, "Category": "Lowest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 10, "Overall_Rank": 30},
    {"Specialty": "Endocrinology", "Salary": 290606, "Category": "Lowest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 11, "Overall_Rank": 31},
    {"Specialty": "Child neurology", "Salary": 289738, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 12, "Overall_Rank": 32},
    {"Specialty": "Pediatric pulmonology", "Salary": 282000, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 13, "Overall_Rank": 33},
    {"Specialty": "Pediatrics", "Salary": 265230, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 14, "Overall_Rank": 34},
    {"Specialty": "Pediatric nephrology", "Salary": 263031, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 15, "Overall_Rank": 35},
    {"Specialty": "Medical genetics", "Salary": 259564, "Category": "Lowest Paid", "Specialty_Type": "General", "Surgical": "Non-Surgical", "Rank_in_Category": 16, "Overall_Rank": 36},
    {"Specialty": "Pediatric hematology and oncology", "Salary": 255733, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 17, "Overall_Rank": 37},
    {"Specialty": "Pediatric infectious disease", "Salary": 248322, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 18, "Overall_Rank": 38},
    {"Specialty": "Pediatric rheumatology", "Salary": 231574, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 19, "Overall_Rank": 39},
    {"Specialty": "Pediatric endocrinology", "Salary": 230426, "Category": "Lowest Paid", "Specialty_Type": "Pediatric", "Surgical": "Non-Surgical", "Rank_in_Category": 20, "Overall_Rank": 40}
];

const growthData = [
    {"Specialty": "Pediatric nephrology", "Growth_Rate": 15.6},
    {"Specialty": "Preventative medicine", "Growth_Rate": 10.0},
    {"Specialty": "Pediatric medicine", "Growth_Rate": 8.5}
];

// Chart colors from design system
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Global variables for charts
let charts = {};
let filteredData = [...physicianData];

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatCurrencyShort(amount) {
    if (amount >= 1000000) {
        return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
        return `$${(amount / 1000).toFixed(0)}K`;
    }
    return formatCurrency(amount);
}

// Filter functions
function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const specialtyTypeFilter = document.getElementById('specialtyTypeFilter').value;
    const surgicalFilter = document.getElementById('surgicalFilter').value;
    const searchFilter = document.getElementById('searchFilter').value.toLowerCase().trim();

    filteredData = physicianData.filter(item => {
        const categoryMatch = categoryFilter === 'All' || item.Category === categoryFilter;
        const specialtyTypeMatch = specialtyTypeFilter === 'All' || item.Specialty_Type === specialtyTypeFilter;
        const surgicalMatch = surgicalFilter === 'All' || item.Surgical === surgicalFilter;
        const searchMatch = searchFilter === '' || item.Specialty.toLowerCase().includes(searchFilter);

        return categoryMatch && specialtyTypeMatch && surgicalMatch && searchMatch;
    });

    updateDashboard();
}

function resetFilters() {
    document.getElementById('categoryFilter').value = 'All';
    document.getElementById('specialtyTypeFilter').value = 'All';
    document.getElementById('surgicalFilter').value = 'All';
    document.getElementById('searchFilter').value = '';
    filteredData = [...physicianData];
    updateDashboard();
}

// Summary statistics functions
function updateSummaryStats() {
    if (filteredData.length === 0) {
        document.getElementById('avgSalary').textContent = '$0';
        document.getElementById('medianSalary').textContent = '$0';
        document.getElementById('salaryRange').textContent = '$0 - $0';
        document.getElementById('totalSpecialties').textContent = '0';
        return;
    }

    const salaries = filteredData.map(d => d.Salary).sort((a, b) => a - b);
    const avgSalary = salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length;
    const medianSalary = salaries[Math.floor(salaries.length / 2)];
    const minSalary = Math.min(...salaries);
    const maxSalary = Math.max(...salaries);

    document.getElementById('avgSalary').textContent = formatCurrency(avgSalary);
    document.getElementById('medianSalary').textContent = formatCurrency(medianSalary);
    document.getElementById('salaryRange').textContent = `${formatCurrencyShort(minSalary)} - ${formatCurrencyShort(maxSalary)}`;
    document.getElementById('totalSpecialties').textContent = filteredData.length.toString();
}

// Chart creation functions
function createHighestPaidChart() {
    const ctx = document.getElementById('highestPaidChart').getContext('2d');
    const highestPaid = filteredData
        .filter(d => d.Category === 'Highest Paid' || filteredData.filter(x => x.Category === 'Highest Paid').length === 0)
        .sort((a, b) => b.Salary - a.Salary)
        .slice(0, 10);

    if (charts.highestPaid) {
        charts.highestPaid.destroy();
    }

    charts.highestPaid = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: highestPaid.map(d => d.Specialty),
            datasets: [{
                label: 'Salary',
                data: highestPaid.map(d => d.Salary),
                backgroundColor: chartColors[0],
                borderColor: chartColors[0],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Salary: ${formatCurrency(context.raw)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrencyShort(value);
                        },
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(119, 124, 124, 0.3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(119, 124, 124, 0.3)'
                    }
                }
            }
        }
    });
}

function createLowestPaidChart() {
    const ctx = document.getElementById('lowestPaidChart').getContext('2d');
    const lowestPaid = filteredData
        .filter(d => d.Category === 'Lowest Paid' || filteredData.filter(x => x.Category === 'Lowest Paid').length === 0)
        .sort((a, b) => a.Salary - b.Salary)
        .slice(0, 10);

    if (charts.lowestPaid) {
        charts.lowestPaid.destroy();
    }

    charts.lowestPaid = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: lowestPaid.map(d => d.Specialty),
            datasets: [{
                label: 'Salary',
                data: lowestPaid.map(d => d.Salary),
                backgroundColor: chartColors[1],
                borderColor: chartColors[1],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Salary: ${formatCurrency(context.raw)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrencyShort(value);
                        },
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(119, 124, 124, 0.3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(119, 124, 124, 0.3)'
                    }
                }
            }
        }
    });
}

function createComparisonChart() {
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    
    const pediatricSalaries = filteredData.filter(d => d.Specialty_Type === 'Pediatric').map(d => d.Salary);
    const generalSalaries = filteredData.filter(d => d.Specialty_Type === 'General').map(d => d.Salary);

    if (charts.comparison) {
        charts.comparison.destroy();
    }

    const pediatricAvg = pediatricSalaries.length > 0 ? pediatricSalaries.reduce((a, b) => a + b, 0) / pediatricSalaries.length : 0;
    const generalAvg = generalSalaries.length > 0 ? generalSalaries.reduce((a, b) => a + b, 0) / generalSalaries.length : 0;

    charts.comparison = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pediatric Specialties', 'General Specialties'],
            datasets: [{
                label: 'Average Salary',
                data: [pediatricAvg, generalAvg],
                backgroundColor: [chartColors[2], chartColors[3]],
                borderColor: [chartColors[2], chartColors[3]],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Average Salary: ${formatCurrency(context.raw)}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrencyShort(value);
                        },
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(119, 124, 124, 0.3)'
                    }
                },
                x: {
                    ticks: {
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(119, 124, 124, 0.3)'
                    }
                }
            }
        }
    });
}

function createGrowthChart() {
    const ctx = document.getElementById('growthChart').getContext('2d');

    if (charts.growth) {
        charts.growth.destroy();
    }

    charts.growth = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: growthData.map(d => d.Specialty),
            datasets: [{
                label: 'Growth Rate (%)',
                data: growthData.map(d => d.Growth_Rate),
                backgroundColor: chartColors[4],
                borderColor: chartColors[4],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Growth Rate: ${context.raw}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(119, 124, 124, 0.3)'
                    }
                },
                x: {
                    ticks: {
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(119, 124, 124, 0.3)'
                    }
                }
            }
        }
    });
}

function createScatterChart() {
    const ctx = document.getElementById('scatterChart').getContext('2d');

    if (charts.scatter) {
        charts.scatter.destroy();
    }

    charts.scatter = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Pediatric',
                data: filteredData
                    .filter(d => d.Specialty_Type === 'Pediatric')
                    .map(d => ({ x: d.Overall_Rank, y: d.Salary })),
                backgroundColor: chartColors[5],
                borderColor: chartColors[5]
            }, {
                label: 'General',
                data: filteredData
                    .filter(d => d.Specialty_Type === 'General')
                    .map(d => ({ x: d.Overall_Rank, y: d.Salary })),
                backgroundColor: chartColors[6],
                borderColor: chartColors[6]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#f5f5f5'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const dataPoint = filteredData.find(d => 
                                d.Overall_Rank === context.raw.x && d.Salary === context.raw.y
                            );
                            return [
                                `${dataPoint.Specialty}`,
                                `Rank: ${context.raw.x}`,
                                `Salary: ${formatCurrency(context.raw.y)}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Overall Rank',
                        color: '#f5f5f5'
                    },
                    ticks: {
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(119, 124, 124, 0.3)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Salary',
                        color: '#f5f5f5'
                    },
                    ticks: {
                        callback: function(value) {
                            return formatCurrencyShort(value);
                        },
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(119, 124, 124, 0.3)'
                    }
                }
            }
        }
    });
}

// Table functions
function updateTable() {
    const tbody = document.getElementById('tableBody');
    const sortBy = document.getElementById('sortBy').value;
    const sortOrder = document.getElementById('sortOrder').value;

    // Sort data
    const sortedData = [...filteredData].sort((a, b) => {
        let aVal = a[sortBy];
        let bVal = b[sortBy];
        
        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (sortOrder === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });

    tbody.innerHTML = '';
    sortedData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.Overall_Rank}</td>
            <td>${item.Specialty}</td>
            <td>${formatCurrency(item.Salary)}</td>
            <td><span class="status-badge status-badge--${item.Category === 'Highest Paid' ? 'highest' : 'lowest'}">${item.Category}</span></td>
            <td><span class="status-badge status-badge--${item.Specialty_Type.toLowerCase()}">${item.Specialty_Type}</span></td>
            <td><span class="status-badge status-badge--${item.Surgical.toLowerCase().replace('-', '')}">${item.Surgical}</span></td>
        `;
        tbody.appendChild(row);
    });
}

// Export function
function exportData() {
    try {
        const headers = ['Rank', 'Specialty', 'Salary', 'Category', 'Type', 'Surgical'];
        const csvRows = [
            headers.join(','),
            ...filteredData.map(item => [
                item.Overall_Rank,
                `"${item.Specialty}"`,
                item.Salary,
                `"${item.Category}"`,
                `"${item.Specialty_Type}"`,
                `"${item.Surgical}"`
            ].join(','))
        ];
        
        const csvContent = csvRows.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'physician_compensation_data.csv');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    } catch (error) {
        console.error('Export failed:', error);
        alert('Export failed. Please try again.');
    }
}

// Update dashboard function
function updateDashboard() {
    updateSummaryStats();
    createHighestPaidChart();
    createLowestPaidChart();
    createComparisonChart();
    createGrowthChart();
    createScatterChart();
    updateTable();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard loading...');
    
    // Set Chart.js defaults for dark theme
    Chart.defaults.color = '#f5f5f5';
    Chart.defaults.borderColor = 'rgba(119, 124, 124, 0.3)';
    Chart.defaults.backgroundColor = 'rgba(33, 128, 141, 0.1)';
    
    // Initialize dashboard
    updateDashboard();

    // Filter event listeners
    const categoryFilter = document.getElementById('categoryFilter');
    const specialtyTypeFilter = document.getElementById('specialtyTypeFilter');
    const surgicalFilter = document.getElementById('surgicalFilter');
    const searchFilter = document.getElementById('searchFilter');
    const resetButton = document.getElementById('resetFilters');
    const exportButton = document.getElementById('exportData');
    const sortBySelect = document.getElementById('sortBy');
    const sortOrderSelect = document.getElementById('sortOrder');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            console.log('Category filter changed:', this.value);
            applyFilters();
        });
    }

    if (specialtyTypeFilter) {
        specialtyTypeFilter.addEventListener('change', function() {
            console.log('Specialty type filter changed:', this.value);
            applyFilters();
        });
    }

    if (surgicalFilter) {
        surgicalFilter.addEventListener('change', function() {
            console.log('Surgical filter changed:', this.value);
            applyFilters();
        });
    }

    if (searchFilter) {
        searchFilter.addEventListener('input', function() {
            console.log('Search filter changed:', this.value);
            applyFilters();
        });
    }

    if (resetButton) {
        resetButton.addEventListener('click', function() {
            console.log('Reset filters clicked');
            resetFilters();
        });
    }

    if (sortBySelect) {
        sortBySelect.addEventListener('change', function() {
            console.log('Sort by changed:', this.value);
            updateTable();
        });
    }

    if (sortOrderSelect) {
        sortOrderSelect.addEventListener('change', function() {
            console.log('Sort order changed:', this.value);
            updateTable();
        });
    }

    if (exportButton) {
        exportButton.addEventListener('click', function() {
            console.log('Export button clicked');
            exportData();
        });
    }

    console.log('Dashboard initialized successfully');
});