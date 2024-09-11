const svg = document.getElementById('zigzag-svg');
            const path = svg.querySelector('path');

            const svgWidth = svg.clientWidth; // Ottieni la larghezza del SVG
            const svgHeight = svg.clientHeight; // Ottieni l'altezza del SVG

            const startX = 0;       // Inizio X della traccia
            const startY = svgHeight / 2;  // Inizio Y (centrato verticalmente)
            const amplitude = svgHeight / 3; // Altezza massima degli zig-zag
            const wavelength = svgWidth / 10; // Larghezza di un ciclo zig-zag

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