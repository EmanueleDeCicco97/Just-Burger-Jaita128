
// LINE ANIMATA FUNC PER PRENDERE LA LARGHEZZA DEI NAVLINK
            window.onload = function() {
                const links = document.querySelectorAll('.nav-link');
                
                links.forEach(link => {
                  const svgline = link.nextElementSibling;
                  const line = svgline.querySelector('line');
                  
                  // Imposta la larghezza dell'SVG in base alla larghezza del link
                  const linkWidth = link.getBoundingClientRect().width;
                  svgline.setAttribute('width', linkWidth);
                  line.setAttribute('x2', linkWidth); // Adatta la linea alla larghezza del link
                });
            };
//
// LINEA SEDI
const svg2 = document.getElementById('sedi-line');
            const path2 = svg2.querySelector('path');

            const svgWidth2 = svg2.clientWidth; // Ottieni la larghezza del SVG
            const svgHeight2 = svg2.clientHeight; // Ottieni l'altezza del SVG

            const startX2 = 0;       // Inizio X della traccia
            const startY2 = svgHeight2 / 2;  // Inizio Y (centrato verticalmente)
            const amplitude2 = svgHeight2 / 3; // Altezza massima degli zig-zag
            const wavelength2 = svgWidth2 / 8; // Larghezza di un ciclo zig-zag

            let zigzagPath2 = `M ${startX2} ${startY2} `; // Inizio del percorso

            // Ciclo per generare i punti di controllo e le estremità per ciascun zig-zag
            for (let i = 0; i < 10; i++) { // 10 segmenti di zig-zag
                const controlX2 = startX2 + i * wavelength2 + wavelength2 / 2; // Calcola la X del punto di controllo
                const controlY2 = (i % 2 === 0) ? startY2 - amplitude2 : startY2 + amplitude2; // Alterna Y del punto di controllo
                const endX2 = startX2 + (i + 1) * wavelength2; // Calcola la X finale del segmento
                const endY2 = startY2; // Mantieni la Y finale sulla linea centrale

                // Aggiungi il segmento di zig-zag al percorso
                zigzagPath2 += `Q ${controlX2} ${controlY2}, ${endX2} ${endY2} `;
                // Q: specifica una curva Bézier quadratica
                // controlX, controlY: coordinata del punto di controllo per la curva
                // endX, endY: coordinata finale del segmento di zig-zag
            }

            // Imposta l'attributo 'd' del percorso con la stringa creata
            path2.setAttribute('d', zigzagPath2);
// LINEA FOOTER
const svg3 = document.getElementById('footer-line');
            const path3 = svg3.querySelector('path');

            const svgWidth3 = svg3.clientWidth; // Ottieni la larghezza del SVG
            const svgHeight3 = svg3.clientHeight; // Ottieni l'altezza del SVG

            const startX3 = 0;       // Inizio X della traccia
            const startY3 = svgHeight3 / 2;  // Inizio Y (centrato verticalmente)
            const amplitude3 = svgHeight3 / 3; // Altezza massima degli zig-zag
            const wavelength3 = svgWidth3 / 8; // Larghezza di un ciclo zig-zag

            let zigzagPath3 = `M ${startX3} ${startY3} `; // Inizio del percorso

            // Ciclo per generare i punti di controllo e le estremità per ciascun zig-zag
            for (let i = 0; i < 10; i++) { // 10 segmenti di zig-zag
                const controlX3 = startX3 + i * wavelength3 + wavelength3 / 2; // Calcola la X del punto di controllo
                const controlY3 = (i % 2 === 0) ? startY3 - amplitude3 : startY3 + amplitude3; // Alterna Y del punto di controllo
                const endX3 = startX3 + (i + 1) * wavelength3; // Calcola la X finale del segmento
                const endY3 = startY3; // Mantieni la Y finale sulla linea centrale

                // Aggiungi il segmento di zig-zag al percorso
                zigzagPath3 += `Q ${controlX3} ${controlY3}, ${endX3} ${endY3} `;
                // Q: specifica una curva Bézier quadratica
                // controlX, controlY: coordinata del punto di controllo per la curva
                // endX, endY: coordinata finale del segmento di zig-zag
            }

            // Imposta l'attributo 'd' del percorso con la stringa creata
            path3.setAttribute('d', zigzagPath3);
// LINEA SEDI2
const svg4 = document.getElementById('sedi-line2');
const path4 = svg4.querySelector('path');

const svgWidth4 = svg4.clientWidth; // Ottieni la larghezza del SVG
const svgHeight4 = svg4.clientHeight; // Ottieni l'altezza del SVG

const startX4 = 0;       // Inizio X della traccia
const startY4 = svgHeight4 / 2;  // Inizio Y (centrato verticalmente)
const amplitude4 = svgHeight4 / 3; // Altezza massima degli zig-zag
const wavelength4 = svgWidth4 / 8; // Larghezza di un ciclo zig-zag

let zigzagPath4 = `M ${startX4} ${startY4} `; // Inizio del percorso

// Ciclo per generare i punti di controllo e le estremità per ciascun zig-zag
for (let i = 0; i < 10; i++) { // 10 segmenti di zig-zag
    const controlX4 = startX4 + i * wavelength4 + wavelength4 / 2; // Calcola la X del punto di controllo
    const controlY4 = (i % 2 === 0) ? startY4 - amplitude4 : startY4 + amplitude4; // Alterna Y del punto di controllo
    const endX4 = startX4 + (i + 1) * wavelength4; // Calcola la X finale del segmento
    const endY4 = startY4; // Mantieni la Y finale sulla linea centrale

    // Aggiungi il segmento di zig-zag al percorso
    zigzagPath4 += `Q ${controlX4} ${controlY4}, ${endX4} ${endY4} `;
    // Q: specifica una curva Bézier quadratica
    // controlX, controlY: coordinata del punto di controllo per la curva
    // endX, endY: coordinata finale del segmento di zig-zag
}

// Imposta l'attributo 'd' del percorso con la stringa creata
path4.setAttribute('d', zigzagPath4);
// LINEA SEDI3
const svg5 = document.getElementById('sedi-line3');
const path5 = svg5.querySelector('path');

const svgWidth5 = svg5.clientWidth; // Ottieni la larghezza del SVG
const svgHeight5 = svg5.clientHeight; // Ottieni l'altezza del SVG

const startX5 = 0;       // Inizio X della traccia
const startY5 = svgHeight5 / 2;  // Inizio Y (centrato verticalmente)
const amplitude5 = svgHeight5 / 3; // Altezza massima degli zig-zag
const wavelength5 = svgWidth5 / 8; // Larghezza di un ciclo zig-zag

let zigzagPath5 = `M ${startX5} ${startY5} `; // Inizio del percorso

// Ciclo per generare i punti di controllo e le estremità per ciascun zig-zag
for (let i = 0; i < 10; i++) { // 10 segmenti di zig-zag
    const controlX5 = startX5 + i * wavelength5 + wavelength5 / 2; // Calcola la X del punto di controllo
    const controlY5 = (i % 2 === 0) ? startY5 - amplitude5 : startY5 + amplitude5; // Alterna Y del punto di controllo
    const endX5 = startX5 + (i + 1) * wavelength5; // Calcola la X finale del segmento
    const endY5 = startY5; // Mantieni la Y finale sulla linea centrale

    // Aggiungi il segmento di zig-zag al percorso
    zigzagPath5 += `Q ${controlX5} ${controlY5}, ${endX5} ${endY5} `;
    // Q: specifica una curva Bézier quadratica
    // controlX, controlY: coordinata del punto di controllo per la curva
    // endX, endY: coordinata finale del segmento di zig-zag
}

// Imposta l'attributo 'd' del percorso con la stringa creata
path5.setAttribute('d', zigzagPath5);
