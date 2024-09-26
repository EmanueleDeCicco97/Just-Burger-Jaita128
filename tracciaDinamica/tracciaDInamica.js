
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
// LINEA BANNER
const svg1 = document.getElementById('banner-line');
            const path1 = svg1.querySelector('path');

            const svgWidth1 = svg1.clientWidth; // Ottieni la larghezza del SVG
            const svgHeight1 = svg1.clientHeight; // Ottieni l'altezza del SVG

            const startX1 = 0;       // Inizio X della traccia
            const startY1 = svgHeight1 / 2;  // Inizio Y (centrato verticalmente)
            const amplitude1 = svgHeight1 / 3; // Altezza massima degli zig-zag
            const wavelength1 = svgWidth1 / 8; // Larghezza di un ciclo zig-zag

            let zigzagPath1 = `M ${startX1} ${startY1} `; // Inizio del percorso

            // Ciclo per generare i punti di controllo e le estremità per ciascun zig-zag
            for (let i = 0; i < 10; i++) { // 10 segmenti di zig-zag
                const controlX1 = startX1 + i * wavelength1 + wavelength1 / 2; // Calcola la X del punto di controllo
                const controlY1 = (i % 2 === 0) ? startY1- amplitude1 : startY1 + amplitude1; // Alterna Y del punto di controllo
                const endX1 = startX1 + (i + 1) * wavelength1; // Calcola la X finale del segmento
                const endY1 = startY1; // Mantieni la Y finale sulla linea centrale

                // Aggiungi il segmento di zig-zag al percorso
                zigzagPath1 += `Q ${controlX1} ${controlY1}, ${endX1} ${endY1} `;
                // Q: specifica una curva Bézier quadratica
                // controlX, controlY: coordinata del punto di controllo per la curva
                // endX, endY: coordinata finale del segmento di zig-zag
            }

            // Imposta l'attributo 'd' del percorso con la stringa creata
            path1.setAttribute('d', zigzagPath1);
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
// LINEA SEDI
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