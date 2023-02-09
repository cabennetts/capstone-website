import Link from "next/link";
import { useRouter } from "next/router";
import UploadPage from "pages/upload";
import RecordPage from "pages/record";
// import { GoogleAuthOptions } from "@google-cloud/storage/build/src/nodejs-common";

export default function Navbar() {


    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/upload">
                        <button className="btn-red">Upload</button>
                    </Link>
                </li>
                <li>
                    <Link href="/record">
                        <button className="btn-blue">Record</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}