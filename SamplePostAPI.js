import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
    const url = 'https://dummy.restapiexample.com/api/v1/create';
    const payload = JSON.stringify({
        name: 'k62',
        salary: '100000',
        age: '18',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);
    check(res, {
        'status 200': (r) => r.status == 200,
        'res body has name': (r) => r.body.includes('k62'),
    });
}
export function handleSummary(data) {
    return {
        "Report.html": htmlReport(data),
    };
}