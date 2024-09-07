// QUESTION 5

document.getElementById("button-five").addEventListener("click", function() {
  document.getElementById("replay-five").innerHTML = `
    1. Ligo o primeiro e o segundo interruptor da esquerda para a direita.<br>
    2. Espero alguns minutos para que as lâmpadas aqueçam.<br>
    3. Desligo o segundo interruptor.<br>
    4. Vou até as salas e verifico qual lâmpada está acesa. A lâmpada acesa na Sala A indica que o primeiro interruptor controla essa sala.<br>
    5. Nas outras duas salas, toco nas lâmpadas para verificar qual está quente. A lâmpada quente na Sala B indica que o segundo interruptor controla essa sala.<br>
    6. A lâmpada fria e apagada na Sala C corresponde ao terceiro interruptor, que não foi utilizado.
    Dessa forma, consigo identificar corretamente qual interruptor controla cada lâmpada.
  `;
});
