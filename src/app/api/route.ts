import { NextRequest, NextResponse } from "next/server";

import { createFeedback } from "../../lib/database";
import { createFeedbackSchema } from "../../lib/feedback";

export async function POST(request: NextRequest) {
	const body = await request.json();

	const parsedFeedback = createFeedbackSchema.safeParse(body);

	if (!parsedFeedback.success) {
		return new NextResponse(parsedFeedback.error.toString());
	}

	await createFeedback(parsedFeedback.data);

	return new NextResponse("Success");
}
