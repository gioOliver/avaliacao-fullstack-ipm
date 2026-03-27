export function formatDate(date) {
    if (!date) return "";

    return new Date(date.replace(" ", "T"))
        .toLocaleDateString("pt-BR");
}