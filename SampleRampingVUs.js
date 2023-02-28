import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    stages: [
        { duration: '1s', target: 500 },
        { duration: '10s', target: 10 },
        { duration: '2s', target: 0 },
    ],
};

export default function () {
    const res = http.get('https://www.alfransi.com.sa/');
    check(res, { 'status was 200': (r) => r.status == 200 });
}

export function handleSummary(data) {
    return {
        "Report.html": htmlReport(data),
    };
}