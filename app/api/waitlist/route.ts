import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'waitlist.json')

interface WaitlistEntry {
  email: string
  timestamp: string
}

async function ensureDataFile(): Promise<WaitlistEntry[]> {
  try {
    const dir = path.dirname(DATA_FILE)
    await fs.mkdir(dir, { recursive: true })
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
    await fs.writeFile(DATA_FILE, '[]', 'utf-8')
    return []
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const entries = await ensureDataFile()

    const exists = entries.some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    )
    if (exists) {
      return NextResponse.json(
        { message: 'Already on the waitlist' },
        { status: 200 }
      )
    }

    entries.push({
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
    })

    await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), 'utf-8')

    return NextResponse.json(
      { message: 'Successfully joined the waitlist' },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const entries = await ensureDataFile()
    return NextResponse.json({ count: entries.length })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
