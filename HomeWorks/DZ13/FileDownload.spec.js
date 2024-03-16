import { test, expect, chromium } from '@playwright/test';
import fs from "fs";
import csvParser from "csv-parser";

test('CSV file download and read', async ({ page }) => {
    await page.goto("https://wsform.com/knowledgebase/sample-csv-files/");
    const downloadPromise = page.waitForEvent('download');
    await page.locator("//a[@href='https://cdn.wsform.com/wp-content/uploads/2020/06/industry.csv']").click();
    const download = await downloadPromise;

    const downloadPath = './HomeWorks/DZ13/download/' + download.suggestedFilename();
    await download.saveAs(downloadPath);

    const results = await readCsvFile(downloadPath);

    // Проверка первого елемента файла
    expect(results[0].Industry).toBe('Accounting/Finance');
    console.log(results[0].Industry);
    // Проверка последнего елемента файла я решил проверят файл так
    const lastElementIndex = results.length - 1;
    expect(results[lastElementIndex].Industry).toBe('Other');
    console.log(results[lastElementIndex].Industry);

    await page.pause();
    deleteFile(downloadPath);
});

function deleteFile(path) {
    fs.unlink(path, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log("File does not exist");
            } else {
                console.log("Error deleting file:", err.message);
            }
        } else {
            console.log("File deleted");
        }
    });
}

// Тут использовал библиотеку csv parse потому что с другими не получалось и вынес в
// отдельню функцию и приишлось подглядывать в chatgpt потому что без промисов не работало а их я не очень шарю
async function readCsvFile(path) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(path)
            .pipe(csvParser())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
}
