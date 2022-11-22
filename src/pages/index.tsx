import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useAnalytics } from "../utils/analytics";

export default function Home() {

	useAnalytics("/")

	return (
		<>
			<Head>
				<title>AudioT</title>		
			</Head>
			<div>
				main section
			</div>
		</>
	)
}