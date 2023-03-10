import { Content } from "./content";
import { Replace } from "../helpers/Replace";
import { randomUUID } from "node:crypto";

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createAt: props.createAt ? props.createAt : new Date()
    };
  }

  public get id(): string { return this._id; }

  public set recipientId(recipientId: string) {
    this.props.recipientId = this.recipientId; 
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  // public set createAt(createAt: Date) {
  //   this.props.createAt = createAt;
  // }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get createAt(): Date {
    return this.props.createAt;
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.createAt;
  }
}