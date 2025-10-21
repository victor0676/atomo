document.addEventListener('DOMContentLoaded', () => {
    const tablaperiodica = document.getElementById('tablaperiodica');
    const modal = document.getElementById('elementosModal');
    const closeBtn = document.querySelector('.close');
    const elementDisplay = document.getElementById('elementosDisplay');

    if (!tablaperiodica) {
        console.error('No se encontró el contenedor de la tabla periódica (#tablaperiodica)');
        return;
    }
    elements.forEach(item => {
        const numero = item.numero ?? item.nummero ?? item.N ?? item.Numero;
        const simbolo = item.simbolo ?? item.simbol ?? item.simbolos ?? item.S ?? item.Simbolo;
        const nombre = item.nombre ?? item.Nombre;
        const categoria = (item.categoria ?? item.categoría ?? 'nometal').toString().replace(/\s+/g, '').toLowerCase();
        const row = item.row ?? item.fila ?? 1;
        const col = item.col ?? item.column ?? item.columna ?? 1;

        const btn = document.createElement('button');
        btn.className = `element ${categoria}`;
        btn.style.gridRowStart = row;
        btn.style.gridColumnStart = col;
        btn.innerHTML = `
            <span class="numero">${numero ?? ''}</span>
            <span class="simbolo">${simbolo ?? ''}</span>
            <span class="nombre">${nombre ?? ''}</span>
        `;

        btn.addEventListener('click', () => showElement({ numero, simbolo, nombre }));
        tablaperiodica.appendChild(btn);
    });

    function showElement(el) {
        elementDisplay.innerHTML = `
            <h2>${el.nombre ?? ''}</h2>
            <div class="elementos-simbolos">${el.simbolo ?? ''}</div>
            <div class="elementos-informacion">
                <p><strong>Número Atómico:</strong> ${el.numero ?? ''}</p>
                <p><strong>Símbolo:</strong> ${el.simbolo ?? ''}</p>
            </div>
            <div class="modelo-contenedor">
                <div class="modelo-placeholder">
                    Aquí se mostrará el modelo 3D de Blender del átomo de ${el.nombre ?? ''}
                </div>
            </div>
        `;
        if (modal) modal.style.display = 'block';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal && modal) {
            modal.style.display = 'none';
        }
    });
});