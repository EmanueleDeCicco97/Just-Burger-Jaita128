const svg = document.getElementById('banner-line');
            const path = svg.querySelector('path');

            const svgWidth = svg.clientWidth; // Ottieni la larghezza del SVG
            const svgHeight = svg.clientHeight; // Ottieni l'altezza del SVG

            const startX = 0;       // Inizio X della traccia
            const startY = svgHeight / 2;  // Inizio Y (centrato verticalmente)
            const amplitude = svgHeight / 3; // Altezza massima degli zig-zag
            const wavelength = svgWidth / 8; // Larghezza di un ciclo zig-zag

            let zigzagPath = `M ${startX} ${startY} `; // Inizio del percorso

            // Ciclo per generare i punti di controllo e le estremità per ciascun zig-zag
            for (let i = 0; i < 10; i++) { // 10 segmenti di zig-zag
                const controlX = startX + i * wavelength + wavelength / 2; // Calcola la X del punto di controllo
                const controlY = (i % 2 === 0) ? startY - amplitude : startY + amplitude; // Alterna Y del punto di controllo
                const endX = startX + (i + 1) * wavelength; // Calcola la X finale del segmento
                const endY = startY; // Mantieni la Y finale sulla linea centrale

                // Aggiungi il segmento di zig-zag al percorso
                zigzagPath += `Q ${controlX} ${controlY}, ${endX} ${endY} `;
                // Q: specifica una curva Bézier quadratica
                // controlX, controlY: coordinata del punto di controllo per la curva
                // endX, endY: coordinata finale del segmento di zig-zag
            }

            // Imposta l'attributo 'd' del percorso con la stringa creata
            path.setAttribute('d', zigzagPath);

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