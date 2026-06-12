function calculateY(rawX) {
    if (rawX === null) {
        alert('Ввод отменен.');
        return null;
    }

    const x = Number(rawX);
    if (Number.isNaN(x)) {
        alert('Ошибка: необходимо ввести числовое значение.');
        return null;
    }

    if (!Number.isFinite(x)) {
        alert('Ошибка: значение x должно быть конечным числом.');
        return null;
    }

    const y = 3 * Math.pow(x, 6) - 6 * Math.pow(x, 2) - 7;
    return y;
}
