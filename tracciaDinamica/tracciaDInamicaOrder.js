
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
