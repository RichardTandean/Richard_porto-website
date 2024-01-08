'use client';
import { useEffect } from "react";

function Bootstrap() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, []);
}

export default Bootstrap;