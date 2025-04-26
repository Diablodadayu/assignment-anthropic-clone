import { NextResponse } from 'next/server';
import { Bigtable } from '@google-cloud/bigtable';
import { v4 as uuidv4 } from 'uuid';

const bigtable = new Bigtable({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
});

const instance = bigtable.instance(process.env.BIGTABLE_INSTANCE_ID);
const table = instance.table('assignment_job_applications');

// Types
const JobApplicationStatus = {
  PENDING: 'pending',
  REVIEWED: 'reviewed',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected'
};

// Helper functions
const createSuccessResponse = (data) => ({
  success: true,
  data
});

const createListSuccessResponse = (data) => ({
  success: true,
  data
});

const createErrorResponse = (error) => ({
  success: false,
  error
});

const createListErrorResponse = (error) => ({
  success: false,
  error
});

const validateJobApplication = (data) => {
  if (!data.name) return 'Name is required';
  if (!data.email) return 'Email is required';
  if (!data.position) return 'Position is required';
  return null;
};

// GET handler for fetching job applications
export async function GET() {
  try {
    const [rows] = await table.getRows();
    const data = rows.map(row => {
      const data = row.data.info;
      return {
        name: data.name[0].value,
        email: data.email[0].value,
        position: data.position[0].value,
        timestamp: data.timestamp[0].value,
      };
    });

    return NextResponse.json(createListSuccessResponse(data));
  } catch (error) {
    console.error('Error fetching job applications:', error);
    return NextResponse.json(
      createListErrorResponse('Failed to fetch job applications'),
      { status: 500 }
    );
  }
}

// POST handler for creating new job applications
export async function POST(request) {
  try {
    const data = await request.json();
    
    const validationError = validateJobApplication(data);
    if (validationError) {
      return NextResponse.json(createErrorResponse(validationError), { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const rowKey = uuidv4();
    
    await table.insert({
      key: rowKey,
      data: {
        info: {
          name: data.name,
          email: data.email,
          position: data.position,
          timestamp: timestamp,
        }
      }
    });

    const jobApplication = {
      ...data,
      id: rowKey,
      status: JobApplicationStatus.PENDING,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    return NextResponse.json(createSuccessResponse(jobApplication), { status: 201 });
  } catch (error) {
    console.error('Error processing job application:', error);
    return NextResponse.json(
      createErrorResponse('Failed to process job application'),
      { status: 500 }
    );
  }
} 